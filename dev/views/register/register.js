
  .controller('register', ['$scope', '$http', '$firebase', function($scope, $http, $firebase) {
      
      var firebaseObj =  new Firebase("https://travel-wishlist.firebaseio.com/");

      firebaseObj.createUser({
        email    : "bobtony@firebase.com",
        password : "correcthorsebatterystaple"
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
        }
      });

  }])