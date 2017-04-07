'use strict'

angular.module('skillsoutApp')
.config(function($stateProvider) {
  $stateProvider
  .state('teacher-profile', {
    url: '/teacher-profile',
    templateUrl: 'client/teacher-profile/teacher-profile.view.ng.html',
    controller: 'TeacherProfileCtrl'
  });
});

