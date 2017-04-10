'use strict';
angular.module('skillsoutApp').config(config).controller('DialogController', DialogController).controller('TeacherProfileCtrl', TeacherProfileCtrl);
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
            vm.teacher = data
        })
    }

    function bookNow(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'client/teacher-profile/dialogs/book-now.view.ng.html',
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
        }).then(function(answer) {
            vm.status = 'You said the information was "' + answer + '".';
        }, function() {
            vm.status = 'You cancelled the dialog.';
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

function DialogController($scope) {
    var vm = this;
    vm.paymentForm = false;
}