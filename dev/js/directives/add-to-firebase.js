
	app.directive('addToFirebase', function(authService) {

		return {

			scope : {

	        	params : '=addToFirebase',
	        	index : "=dataIndex"

	        },
	        
	    	link: function(scope, ele, attr) {

	        	ele.bind('click', function() {
     		
	        		authService.firebaseRef.child("places").push(

				    	scope.params
				    	

				    );

	        		// below not working?
	        		//scope.showSearch = false

	        	})

	    	}

	  	}

	});
