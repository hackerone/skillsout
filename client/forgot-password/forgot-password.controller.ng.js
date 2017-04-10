(function() {
    'use strict';
    angular.module('skillsoutApp').controller('ForgotPasswordController', ForgotPasswordController);
    /** @ngInject */
    function ForgotPasswordController($state, $scope) {
        var vm = this;
        // Data
        vm.form = {
            email: ''
        };
        // Methods
        vm.forgotPassword = forgotPassword;
        /**
         * On Submit Login form
         * @param invalid
         */
        function forgotPassword(invalid) {
            if (!invalid) {
                Meteor.call('forgetEmail', vm.form.email, function(error) {
                    console.log('email was not send', error);
                }, function() {
                    $state.go('login');
                });
            }
        }
        // Cleanup code
        $scope.$on('$destroy', function() {
            vm = {};
        });
    }
})();