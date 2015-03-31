
  app.controller('register', ['$scope', '$http', '$firebase', function($scope, $http, $firebase) {
      
      
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



      $scope.loginEmail    = "";
      $scope.loginPassword = "";

      $scope.loginUser = function() {

        firebaseObj.authWithPassword({

          email    : $scope.loginEmail,
          password : $scope.loginPassword

        }, authHandler);

        function authHandler(error, authData) {

          if (error) {

              console.log("Login Failed!", error);

          } else {

              console.log("Authenticated successfully with payload:", authData);

          }

        }

      }

  }]);