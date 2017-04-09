angular.module('skillsoutApp').service('teachersService', teachers);

function teachers($q) {
    var service = {
        getTeachers: getTeachers
    }

    function getTeachers(search) {
        var deferred = $q.defer();
        Meteor.call('getTeachers', search, function(err, result) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }
    return service;
}