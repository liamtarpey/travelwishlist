
.controller('main', ['$scope', 
                     '$http', 
                     '$firebase', 
                     'api',
                     'fBaseUrl', 
                     'mapBoxToken', 
                     'fourSquareBase',
                     'geolocation',
                     function($scope, $http, $firebase, api, fBaseUrl, mapBoxToken, fourSquareBase, geolocation) {
    


  // Init Firebase
  var firebaseObj  =  new Firebase(fBaseUrl),
      sync         =  $firebase(firebaseObj);



  // Variables
  $scope.field         = "";
  $scope.data          = sync.$asObject();
  L.mapbox.accessToken = mapBoxToken



  // Map - uses geolocation API
  if (navigator.geolocation) {
    var map = L.mapbox.map('map', 'liamtarpey.le3488c3', { maxZoom: 14 })
      .locate().on('locationfound', function(e) {
        map.fitBounds(e.bounds);
    })
  } else { var map = L.mapbox.map('map', 'liamtarpey.le3488c3').setView( [32.7150, -117.1625], 9) }

  // Get current coords
  geolocation.getLocation().then(function(data){

    $scope.coords = {

      lat: data.coords.latitude, 
      long: data.coords.longitude

    };
    
  }); 


  // Create new entry in Firebase
  $scope.suggestEntry = function(val) {

      $scope.Url = fourSquareBase + '&ll=' + $scope.coords.lat + ',' + $scope.coords.long + '&query=' + val

      // Foursquare API call
      api.getPlaces($scope.Url).then(function (data) {

        $scope.suggestions = data.response.venues
        
      })

      // Clear input after submit
      $scope.field = "";

  }


}])