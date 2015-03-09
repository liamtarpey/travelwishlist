
  .controller('home', ['$scope', '$http', '$firebase', function($scope, $http, $firebase) {
      
      // Init Firebase
      var firebaseObj  =  new Firebase("https://travel-wishlist.firebaseio.com/"),
          sync         =  $firebase(firebaseObj);

      // Scope variables
      $scope.field = "";
      $scope.data  = sync.$asObject();


    // =======
    // Map
    // =======
    $scope.map = { center: { latitude: 36.1667, longitude: -86.7833 }, zoom: 8 };


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

            firebaseObj.child("places").remove(val)

        }         

      }




  }])