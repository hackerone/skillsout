'use strict';
angular.module('skillsoutApp').config(config).controller('TeacherProfileCtrl', TeacherProfileCtrl).filter('trust', ['$sce',
    function($sce) {
        return function(value, type) {
            // Defaults to treating trusted text as `html`
            return $sce.trustAsResourceUrl(type || 'html', text);
        }
    }
]);

function config($sceProvider) {
    $sceProvider.enabled(false);
}

function TeacherProfileCtrl($scope, $stateParams, teachersService, $mdDialog) {
    //data
    var vm = this;
    vm.viewName = 'TeacherProfile';
    vm.teacherId = $stateParams.id;
    //methods 
    vm.initialize = initialize;
    vm.bookNow = bookNow;
    ///////
    vm.initialize();

    function initialize() {
        var promise = teachersService.getSingleTeacher(vm.teacherId);
        promise.then(function(data) {
            data['banner']['youtube'] = vm.teacher = data
        })
    }

    function bookNow(ev, amount) {
        $mdDialog.show({
            templateUrl: 'client/teacher-profile/dialogs/book-now.view.ng.html',
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: vm.customFullscreen, // Only for -xs, -sm breakpoints.,
            controller: 'DialogController',
            controllerAs: 'vm',
            locals: {
                amount: amount,
            }
        });
    };
    vm.todos = [{
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
    }, {
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
    }];
}