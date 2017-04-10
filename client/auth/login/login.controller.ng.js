'use strict'
angular.module('skillsoutApp')
.controller('LoginCtrl', function($scope,$state) {
  var vm = this;

        // Data
        vm.serverError = [];
        /*login loader default hide*/
        vm.activated = false;
        // Methods
        vm.login = login;

        /**
         * On Submit Login form
         * @param invalid
         */
        function login(invalid) {
            /*login loader onlogin show*/
            vm.activated = true;
            if (!invalid) {
                vm.serverError = null;
                Meteor.loginWithPassword(vm.form.email, vm.form.password, function (error) {
                    if (error) {
                        vm.serverError = error;
                    } else {
                        /*Set session expiration days for logged-in user*/
                        var rememberMe = vm.form.rememberMe;
                        var expireDays = null;
                        if (rememberMe) {
                            expireDays = 30;
                        }
                        Meteor.call('setRememberMe', expireDays, function (error) {
                            if (error) {
                                console.log('error:' + error);
                            }
                        });
                        $state.go('main');
                    }
                    /*login loader afterlogin hide*/
                    vm.activated = false;
                });
            }
        }

        // Cleanup code
        $scope.$on('$destroy', function () {
            vm = {};
        });
});
