(function ()
{
    'use strict';

    angular
        .module('skillsout', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider.state('forgotPassword', {
            url      : '/forgot-password',
            templateUrl    : 'client/forgot-password/forgot-password.view.ng.html',
            controller:'ForgotPasswordController as vm',
            bodyClass: 'forgot-password'
        });
    }

})();
