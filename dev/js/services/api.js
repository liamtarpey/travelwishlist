	
	app.factory('api', ['$http', '$q', function($http, $q) {

	    return {

	    	// API call to retreive all places from Foursquare
	    	getPlaces	: function(url) {

	    		var defer  = $q.defer();

				$http.get(url)

				.success(function(data){

					defer.resolve(data);

		        })

		        .error(function() { console.log("error with request") })

		        return defer.promise 

	    	}
	    	
	    }
	    
	}]);