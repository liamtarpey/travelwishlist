
var app = angular.module('travelWishlist', [
	'ngSanitize', 
	'geolocation', 
	'angular-mapbox'
]);

// Define constants to inject anywhere in app
app.constant('fBaseUrl', 'https://travel-wishlist.firebaseio.com/');
app.constant('mapBoxToken', 'pk.eyJ1IjoibGlhbXRhcnBleSIsImEiOiJ3c1JpT0ZNIn0.j0iCydu77Cq5vqLFzFRZZw');
app.constant('fourSquareBase', 'https://api.foursquare.com/v2/venues/search?client_id=WNIMB5GMM2Y4NVOZU4WUREHMGCHZE321ZLYTHKYJL2EIUSZY&client_secret=UMDDTDD5AU0DG35GEFLLY4A4LCO5SS0CBGNPYEB1FIU0HPMM&v=20130815');

