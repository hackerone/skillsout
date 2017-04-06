'use strict'
angular.module('skillsoutApp')
        .controller('toolbarController', toolbarController)
        .directive('toolbar', function () {
            return {
                restrict: 'AE',
                templateUrl: 'client/components/toolbar/toolbar.view.ng.html',
                replace: true,
                controller: toolbarController
            };
        });

function toolbarController($scope, $mdSidenav) {
    console.log('hi');
    $scope.toggleSidenav = function () {
        $mdSidenav('left').toggle()
    };
    $scope.list = [{
            label: 'Phone Android',
            name: 'My Account'
        }, {
            label: 'Phone iPhone',
            name: 'Login'
        }];
}