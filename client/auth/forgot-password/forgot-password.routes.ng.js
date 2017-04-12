angular.module('skillsoutApp').config(function($stateProvider) {
    // State
    $stateProvider.state('forgotPassword', {
        url: '/forgot-password',
        templateUrl: 'client/auth/forgot-password/forgot-password.view.ng.html',
        controller: 'ForgotPasswordController as vm',
        bodyClass: 'forgot-password'
    });
});
/** @ngInject */