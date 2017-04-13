'use strict'
angular.module('skillsoutApp').config(function($stateProvider) {
    $stateProvider.state('teacherProfile', {
        url: '/teacher-profile/:teacherId',
        templateUrl: 'client/teacher-profile/teacher-profile.view.ng.html',
        controller: 'TeacherProfileCtrl as vm'
    });
});