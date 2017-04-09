angular.module('skillsoutApp')
.filter('averageRating', averageRating);

function averageRating() {
    return function(reviews) {
    	var totalRating  = 0;
    	angular.forEach(reviews,function(review){
			totalRating = totalRating + review.rating;
    	});
    	
    	console.log(totalRating/_.size(reviews));
    	return totalRating/_.size(reviews);
    };
  }
