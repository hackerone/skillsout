'use strict'

angular.module('skillsoutApp')
.config(function($stateProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'client/login/login.view.ng.html',
    controller: 'LoginCtrl'
  });
});