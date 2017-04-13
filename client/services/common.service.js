angular.module('skillsoutApp').service('commonService', common);

function common($q) {
    var service = {
        createPayment: createPayment,
    }

    function createPayment(type, paymentObj) {
        var deferred = $q.defer();
        Meteor.call('createPayment', type, paymentObj, function(err, result) {
            if (err) {
                deferred.reject(false);
            } else {
                deferred.resolve(true);
            }
        });
        return deferred.promise;
    }
    return service;
}