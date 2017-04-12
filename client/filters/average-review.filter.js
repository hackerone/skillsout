angular.module('skillsoutApp').filter('averageRating', averageRating);

function averageRating() {
    return function(reviews) {
        var totalRating = 0;
        angular.forEach(reviews, function(review) {
            totalRating = totalRating + review.rating;
        }); 
        return totalRating / _.size(reviews);
    };
}