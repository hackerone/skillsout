angular.module('skillsoutApp').service('teachersService', teachers);

function teachers($q) {
    var service = {
        getLoadTeachers:getLoadTeachers,
        getTeachers: getTeachers,
        getSingleTeacher:getSingleTeacher
    }


    function getLoadTeachers(){
         var deferred = $q.defer();
        Meteor.call('getLoadTeachers', {}, function(err, result) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }
    function getTeachers(search,options) {
        var deferred = $q.defer();
        Meteor.call('getTeachers', search,options, function(err, result) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }
    function getSingleTeacher(teacherId) {
        var deferred = $q.defer();
       Meteor.call('getSingleTeacher', teacherId ,function(err,result){
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