
	.directive('addToFirebase', function(authService) {

		return {

			scope : {

	        	name : '=addToFirebase'

	        },
	        
	    	link: function(scope, ele, attr) {

	        	ele.bind('click', function() {

	       			authService.firebaseRef.child("places").push({

				    	"location": scope.name

				    })

	        	})

	    	}

	  	}

	})
