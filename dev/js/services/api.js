	
	.factory('api', ['$http', '$q', function($http, $q) {

	    return {

	    	// API call to retreive all places
	    	getPlaces	: function(url) {

	    		var defer  = $q.defer();
	    			//prefix = this.prefix(url);

				$http.get(url)

				.success(function(data){

					defer.resolve(data);

		        })

		        .error(function() { console.log("error with request") })

		        return defer.promise 

	    	}

	    	// prefix : function(path){

	    	// 	var prefix = (path.indexOf('?') > -1) ? "&" : "?";
	    	// 	return prefix

	    	// }

	    }
	    
	}])