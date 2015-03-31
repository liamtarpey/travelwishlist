
	app.directive('addToFirebase', function(authService) {

		return {

			scope : {

	        	params : '=addToFirebase'

	        },
	        
	    	link: function(scope, ele, attr) {

	        	ele.bind('click', function() {
     		

	        		authService.firebaseRef.child("places").push(

				    	scope.params

				    	//scope.params


				    )

	        		console.log(scope.params)
	        		//console.log(scope.$eval(attr['addToFirebase']))

	        		//console.log(scope.name)

	        	})

	    	}

	  	}

	});
