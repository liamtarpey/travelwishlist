
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
  $scope.field                = ""
  L.mapbox.accessToken        = mapBoxToken
  $scope.suggestionsVisible   = false

  
  //$scope.data = $firebaseObject(authService.firebaseRef)

  
  

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

  

  // Suggest place with Foursquare API call
  $scope.suggestEntry = function(val) {

      $scope.suggestionsVisible = true

      $scope.Url = fourSquareBase + '&ll=' + $scope.coords.lat + ',' + $scope.coords.long + '&query=' + val

      // Foursquare API call
      api.getPlaces($scope.Url).then(function (data) {

        $scope.suggestions = data.response.venues

      })

      

      

      // Clear input after submit
     //$scope.field = "";

  }

  $scope.hideSuggestions = function() {

    $scope.suggestionsVisible = false

  }

}])