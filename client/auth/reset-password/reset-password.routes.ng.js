(function() {
    'use strict';
    angular.module('skillsoutApp').config(config);
    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider.state('resetPassword', {
            url: '/reset-password/:token',
            templateUrl: 'client/auth/reset-assword/reset-password.view.ng.html',
            controller: 'ResetPasswordController as vm',
            bodyClass: 'reset-password'
        });
    }
})();