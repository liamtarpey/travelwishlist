
  app.controller('main', ['$scope', 
                       '$http', 
                       'authService', 
                       'api',
                       'fBaseUrl', 
                       'mapBoxToken', 
                       'fourSquareBase',
                       'geolocation',
                       'mapboxService',
                       function($scope, $http, authService, api, fBaseUrl, mapBoxToken, fourSquareBase, geolocation, mapboxService) {
      
    // Init mapbox 
    mapboxService.init({ accessToken: mapBoxToken });  

    // Variables
    var idArray                 = [];
    $scope.field                = "";
    $scope.showSidebar          = false;
    $scope.suggestionsVisible   = false;
    $scope.options              = {};

    // Get current coords & load map
    geolocation.getLocation().then(function(data){

      $scope.coords = {

        lat: data.coords.latitude, 
        lng: data.coords.longitude
      };
    }); 

    
    // Get JSON from firebase
    authService.firebaseRef.on("value", function(place) {

        $scope.data = place.val();

        for (something in $scope.data.places) {

          idArray.push($scope.data.places[something].id);
        }

    }, function (errorObject) {

        console.log("The read failed: " + errorObject.code);
    });

  // =====================================
  // Suggest location using Foursquare API
  // =====================================
    $scope.suggestEntry = function(val) {

        $scope.suggestionsVisible = true;

        $scope.Url = fourSquareBase + '&ll=' + $scope.coords.lat + ',' + $scope.coords.lng + '&query=' + val;

        // Foursquare API call
        api.getPlaces($scope.Url).then(function (data) {

            $scope.suggestions = data.response.venues;
            //$scope.icon = $scope.suggestions.categories.icon.prefix + "bg_64" + $scope.suggestions.categories.icon.suffix;
            
            //console.log($scope.icon)
        });
    }

  // =========================
  // Add selection to Firebase
  // =========================
    $scope.addToFirebase = function(index) {

      // Check if ID exists in Array and if not push new object to Firebase
      if (idArray.indexOf($scope.suggestions[index].id) == -1) {

        var objAddress = (!$scope.suggestions[index].location.formattedAddress[index]) ? "" : $scope.suggestions[index].location.formattedAddress[index],
            objOptions = {

              name : $scope.suggestions[index].name,
              checkins : $scope.suggestions[index].stats.checkinsCount,
              address : objAddress,
              lat : $scope.suggestions[index].location.lat,
              lng : $scope.suggestions[index].location.lng,
              id : $scope.suggestions[index].id,
              icon : $scope.suggestions[index].categories[0].icon.prefix + "bg_32" + $scope.suggestions[index].categories[0].icon.suffix
              //url : $scope.suggestions[index].url
            };        

        authService.firebaseRef.child("places").push(objOptions);
        //$scope.showSearch = false
        
      } else {

        alert("You have already added this place!")
      }

    }

    //Remove entry from Firebase
    $scope.removeEntry = function(placeId) {

      var placeToRemove = new Firebase("https://travel-wishlist.firebaseio.com/places/" + placeId),
          confirmation = confirm("Are you sure you wish to remove this place?");

      if(confirmation == true) {

        placeToRemove.remove()
      }
    }

  }]);
