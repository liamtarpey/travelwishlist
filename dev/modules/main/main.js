
  .controller('main', ['$scope', '$http', '$firebase', 'fBaseUrl', 'mapBoxToken', function($scope, $http, $firebase, fBaseUrl, mapBoxToken) {
      
      // Init Firebase
      var firebaseObj  =  new Firebase(fBaseUrl),
          sync         =  $firebase(firebaseObj);

      // Scope variables
      $scope.field = "";
      $scope.data  = sync.$asObject();


    // =======
    // Map
    // =======
    L.mapbox.accessToken = mapBoxToken
    var map = L.mapbox.map('map', 'liamtarpey.le3488c3').setView([40, -74.50], 9)


    // ==========
    // Sidebar 
    // =========

      // Create new entry in Firebase
      $scope.setNewEntry = function(val) {

        firebaseObj.child("places").push({

          "location": val

        })

        // Clear input after submit
        $scope.field = "";

      }

      // Remove entry from Firebase
      $scope.removeEntry = function(val) {

        if (confirm('Are you sure you want to remove this location?')) {

            firebaseObj.child("places").remove()

        }         

      }




  }])