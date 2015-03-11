
	.directive('addToFirebase', function() {

		return {

			scope : {
	        	name : '=addToFirebase'
	        },
	        
	    	link: function(scope, ele, attr) {

	        	ele.bind('click', function() {

	        		console.log(scope.name)

	        		// Will need to run firebase in auth service before this will work
	       			// firebaseRef.child("places").push({
				    // 	"location": val
				    // })

	        	})

	    	}

	  	}

	})
