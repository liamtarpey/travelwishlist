
  .controller('register', ['$scope', '$http', '$firebase', function($scope, $http, $firebase) {
      
      var firebaseObj =  new Firebase("https://travel-wishlist.firebaseio.com/");

      $scope.registerEmail    = "";
      $scope.registerPassword = "";

      $scope.registerUser = function() {

        firebaseObj.createUser({

          email    : $scope.registerEmail,
          password : $scope.registerPassword

        }, function(error, userData) {

          if (error) {

            console.log("Error creating user:", error);

          } else {

            console.log("Successfully created user account with uid:", userData.uid);

          }
          
        });

      }

  }])