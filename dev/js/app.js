var app = angular.module('travelwishlist', ['ngRoute','ngSanitize', 'firebase', 'uiGmapgoogle-maps'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 	
 	$routeProvider

        .when('/', {
        	templateUrl: '/ng-views/home.html',
        	controller: 'home'
        })

        .when('/login', {
            templateUrl: '/ng-views/login.html',
            controller: 'login'
        })

        .when('/register', {
            templateUrl: '/ng-views/register.html',
            controller: 'register'
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