'use strict'

angular.module('skillsoutApp')
.config(function($stateProvider) {
  $stateProvider
  .state('contact', {
    url: '/contact-us',
    templateUrl: 'client/contact-us/contact-us.view.ng.html',
    controller: 'ContactUsCtrl as vm'
  });
});