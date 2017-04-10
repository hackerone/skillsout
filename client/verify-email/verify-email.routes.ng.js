(function () {
    'use strict';

    angular
        .module('app.account.auth.verify', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider) {
        // State
        $stateProvider.state('app.account.auth.verify', {
            url: '/pages/auth/verify/:type/:token',
            views: {
                'main@': {
                    templateUrl: 'app/layouts/content-only.html',
                    controller: 'verifyEmailController as vm'
                }
            },
            bodyClass: 'forgot-password'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/account/auth/forgot-password');


    }

})();
