'use strict'

angular.module('skillsoutApp')
.config(function($stateProvider) {
  $stateProvider
  .state('register', {
    url: '/register',
    templateUrl: 'client/register/register.view.ng.html',
    controller: 'RegisterCtrl as vm'
  });
});
