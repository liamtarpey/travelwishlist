
	.directive('addToFirebase', function(authService) {

		return {

			scope : {

	        	name : '=addToFirebase',
	        	visible : "=visible"

	        },
	        
	    	link: function(scope, ele, attr) {

	        	ele.bind('click', function() {
     		

	        		//	authService.firebaseRef.child("places").push({

				    // 	"location": scope.name

				    // })

	        		console.log(scope.name)

	        	})

	    	}

	  	}

	})
