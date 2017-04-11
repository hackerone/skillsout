angular.module('skillsoutApp').service('classService', teachers);

function teachers($q) {
    var service = {
        getClass: getClass,
    }

    function getClass(teacherId, options) {
        var deferred = $q.defer();
        Meteor.call('getClass', teacherId, options, function(err, result) {
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