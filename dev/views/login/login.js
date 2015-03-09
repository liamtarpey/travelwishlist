
  .controller('login', ['$scope', '$http', '$firebase', function($scope, $http, $firebase) {
      
    var firebaseObj =  new Firebase("https://travel-wishlist.firebaseio.com/");

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

  }])