
	app.factory('authService', function(fBaseUrl) {

		return {

			firebaseRef : new Firebase(fBaseUrl)
		}  		
		
	});