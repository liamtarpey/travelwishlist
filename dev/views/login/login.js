
  .controller('login', ['$scope', '$http', '$firebase', function($scope, $http, $firebase) {
      
      var username = $scope.user.email,
          password = $scope.user.password,
          ref      =  new Firebase("https://travel-wishlist.firebaseio.com/");

  }])