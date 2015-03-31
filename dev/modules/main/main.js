
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
    $scope.field                = "";
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

        $scope.$apply(function() {

            $scope.data = place.val();

        })

    }, function (errorObject) {

        console.log("The read failed: " + errorObject.code);

    });


    // Suggest place with Foursquare API call
    $scope.suggestEntry = function(val) {

        $scope.suggestionsVisible = true

        $scope.Url = fourSquareBase + '&ll=' + $scope.coords.lat + ',' + $scope.coords.lng + '&query=' + val

        // Foursquare API call
        api.getPlaces($scope.Url).then(function (data) {

            $scope.suggestions = data.response.venues
            console.log($scope.suggestions)

            $scope.options = {

                name : $scope.suggestions[0].name,
                checkins : $scope.suggestions[0].stats.checkinsCount,
                address : $scope.suggestions[0].location.formattedAddress[0],
                lat : $scope.suggestions[0].location.lat,
                lng : $scope.suggestions[0].location.lng,
                url : $scope.suggestions[0].url

                // The above fails to update if no keyup has been pressed - will fix

            };       

        });

        // Clear input after submit
       //$scope.field = "";

    }

    $scope.hideSuggestions = function() {

      $scope.suggestionsVisible = false

    }

    //Remove entry from Firebase
    $scope.removeEntry = function() {

      //console.log(place)
      authService.firebaseRef.child("places").remove()      

    }

  }]);