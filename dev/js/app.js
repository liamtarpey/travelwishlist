var app = angular.module('travelwishlist', ['ngRoute','ngSanitize', 'firebase'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 	
 	$routeProvider

        // .when('/', {
        // 	templateUrl: '/ng-views/home.html',
        // 	controller: 'home'
        // })

        .when('/', {
            templateUrl: '/ng-views/login.html',
            controller: 'login'
        })

        .when('/map', {
        	templateUrl: '/ng-views/map.html',
        	controller: 'map'
        })

        
  	$locationProvider.html5Mode({
	  	enabled: true,
	  	requireBase: false
	});

}])