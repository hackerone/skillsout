'use strict'
angular.module('skillsoutApp')
.directive('equals', equalsDirective)
.controller('RegisterCtrl', function($scope,$state) {
   var vm = this;

        // Data
        vm.account = {
            email: '',
            password: '',
            passwordConfirm: ''
        };

        vm.register = register;
        vm.serverError = [];

        function register(invalid) {
           
            if (!invalid) {
                Accounts.createUser({
                    password: vm.account.password,
                    email: vm.account.email
                }, function (err) {
                    if (err) {
                        console.log('error : ' + err);
                        vm.serverError = err;
                    } else {
                        Meteor.call('activeUser', vm.account.email, function (err) {
                            Meteor.logout();
                            if (!err) {
                                console.log('You have been successfully registered., please check your email');
                            $state.go('login');
                            }
                        });
                        
                    }
                });
            }
        }

        // Cleanup code
        $scope.$on('$destroy', function () {
            vm = {};
        });
});
function equalsDirective() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, elem, attrs, ngModel) {
                if (!ngModel) {
                    return false;
                }
                var validate;
                var watch = scope.$watch(attrs.ngModel, function () {
                    validate();
                });
                attrs.$observe('equals', function () {
                    validate();
                });
                validate = function () {
                    var val1 = ngModel.$viewValue;
                    var val2 = attrs.equals;
                    ngModel.$setValidity('equals', !val1 || !val2 || val1 === val2);
                };

                // avoid memoryleaks from dom references
                scope.$on('$destroy', function () {
                    watch();
                });
            }
        };
    }