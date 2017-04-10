(function () {
    'use strict';

    angular
        .module('skillsoutApp')
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        // State
        $stateProvider.state('verify', {
            url: '/verify/:type/:token',
            template: '<div></div>',
            controller: 'verifyEmailController as vm',
            bodyClass: 'forgot-password'
        });
    }
})();
