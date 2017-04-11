'use strict'
angular.module('skillsoutApp').config(function($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'client/auth/login/login.view.ng.html',
        controller: 'LoginCtrl as vm'
    }).state('logout', {
        url: '/logout',
        templateUrl: '<div></div>',
        controller: function($scope) {
            Meteor.logout();
            $state.go('login');
        }
    });
});