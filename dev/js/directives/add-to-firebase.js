
	app.directive('addToFirebase', function(authService) {

		return {

			scope : {

	        	params : '=addToFirebase'

	        },
	        
	    	link: function(scope, ele, attr) {

	        	ele.bind('click', function() {
     		
	        		authService.firebaseRef.child("places").push(

				    	scope.params
				    	

				    );

				    scope.showSearch = false;

	        		// below not working?
	        		//scope.showSearch = false

	        	})

	    	}

	  	}

	});
