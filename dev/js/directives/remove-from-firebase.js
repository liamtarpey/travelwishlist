

	.directive('removeFromFirebase', function() {

		return {

			scope : {
	        	name : '=removeFromFirebase'
	        },
	        
	    	link: function(scope, ele, attr) {

	        	ele.bind('click', function() {

	        		console.log(scope.name)

	        		


	        	})

	    	}

	  	}

	})
