
.controller('main', ['$scope', 
                     '$http', 
                     'authService', 
                     'api',
                     'fBaseUrl', 
                     'mapBoxToken', 
                     'fourSquareBase',
                     'geolocation',
                     function($scope, $http, authService, api, fBaseUrl, mapBoxToken, fourSquareBase, geolocation) {
    

  // Variables
  $scope.field                = "";
  L.mapbox.accessToken        = mapBoxToken;
  $scope.suggestionsVisible   = false;
  $scope.data                 = "";

  
  // Get JSON from firebase
  authService.firebaseRef.on("value", function(place) {

    $scope.data = place.val();
    

  }, function (errorObject) {

    console.log("The read failed: " + errorObject.code);

  });

 


  // Get current coords & load map
  geolocation.getLocation().then(function(data){

    $scope.coords = {

      lat: data.coords.latitude, 
      long: data.coords.longitude

    };
    
  }); 

  if (navigator.geolocation) {
    var map = L.mapbox.map('map', 'liamtarpey.le3488c3', { maxZoom: 14 })
      .locate().on('locationfound', function(e) {
        map.fitBounds(e.bounds);
    })
  } else { var map = L.mapbox.map('map', 'liamtarpey.le3488c3').setView( [32.7150, -117.1625], 9) }


  //console.log("MAIN DATA: ", $scope.data);
map.featureLayer.on('ready', function(e) {
    var markers = [
      32.7150, -117.1625,
      30.7150, -118.1625
    ];
    this.eachLayer(function(marker) { markers.push(marker); });
    cycle(markers);
});

function cycle(markers) {
    var i = 0;
    function run() {
        if (++i > markers.length - 1) i = 0;
        var marker = markers[i];
        //console.log(marker.getLatLng());
    }
    run();
}


  // function cycle(markers) {
  //     var i = 0;
  //     function run() {
  //         if (++i > markers.length - 1) i = 0;
  //         map.setView(markers[i].getLatLng(), 12);
  //         markers[i].openPopup();
  //         window.setTimeout(run, 3000);
  //     }
  //     run();
  // }
  // cycle(32.7150, -117.1625);

  

  // Suggest place with Foursquare API call
  $scope.suggestEntry = function(val) {

      $scope.suggestionsVisible = true

      $scope.Url = fourSquareBase + '&ll=' + $scope.coords.lat + ',' + $scope.coords.long + '&query=' + val

      // Foursquare API call
      api.getPlaces($scope.Url).then(function (data) {

        $scope.suggestions = data.response.venues
        console.log($scope.suggestions)

      })
      // Clear input after submit
     //$scope.field = "";

  }

  $scope.hideSuggestions = function() {

    $scope.suggestionsVisible = false

  }

  // Remove entry from Firebase
  $scope.removeEntry = function() {

    authService.firebaseRef.child("places").remove()      

  }

}])