
  .controller('home', ['$scope', '$http', '$firebase', function($scope, $http, $firebase) {
      
      // Init Firebase
      var ref  =  new Firebase("https://travel-wishlist.firebaseio.com/"),
          sync =  $firebase(ref);

      // Scope variables
      $scope.field = "";
      $scope.data  = sync.$asObject();

      // Create new entry in Firebase
      $scope.setNewEntry = function(val) {

        ref.child("places").push({

          "location": val

        })

        // Clear input after submit
        $scope.field = "";

      }

      // Remove entry from Firebase
      $scope.removeEntry = function(val) {

        if (confirm('Are you sure you want to remove this location?')) {

            ref.child("places").remove(val)

        }         

      }

  }])