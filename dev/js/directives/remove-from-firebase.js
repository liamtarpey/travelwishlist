

	.directive('removeFromFirebase', function() {

		return {

			scope : {
	        	name : '=addToFirebase'
	        },
	        
	    	link: function(scope, ele, attr) {

	        	ele.bind('click', function() {

	        		console.log(scope.name)

	        		// Remove entry from Firebase
					    // $scope.removeEntry = function(val) {

					    //   if (confirm('Are you sure you want to remove this location?')) {

					    //       firebaseObj.child("places").remove()

					    //   }         

					    // }


	        	})

	    	}

	  	}

	})
