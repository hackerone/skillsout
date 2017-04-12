'use strict'
angular.module('skillsoutApp').controller('toolbarController', toolbarController).directive('toolbar', function() {
    return {
        restrict: 'AE',
        templateUrl: 'client/components/toolbar/toolbar.view.ng.html',
        replace: true,
        controller: 'toolbarController as vm'
    };
});

function toolbarController($scope, $mdSidenav) {
    var vm = this;
    vm.menuList = [{
        name: 'Home',
        sref: 'main'
    }, {
        name: 'Contact-US',
        sref: 'contact'
    }, {
        name: 'Login',
        sref: 'login'
    }, {
        name: 'Register',
        sref: 'register'
    }];
    console.log(Meteor.userId());
    if(!!Meteor.userId()){
        vm.menuList[2] =  {
            name: 'Logout',
        sref: 'logout'
        }
    }
    vm.toggleSidenav = function() {
        $mdSidenav('left').toggle()
    };
}