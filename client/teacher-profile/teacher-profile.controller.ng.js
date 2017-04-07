'use strict';
angular.module('skillsoutApp').controller('DialogController', DialogController).controller('TeacherProfileCtrl', TeacherProfileCtrl);

function TeacherProfileCtrl($scope, $mdDialog) {
    $scope.viewName = 'TEacherProfile';
    $scope.bookNow = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'client/teacher-profile/dialogs/book-now.view.ng.html',
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        }).then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });
    };
    $scope.todos = [{
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
	$scope.paymentForm = false;
}