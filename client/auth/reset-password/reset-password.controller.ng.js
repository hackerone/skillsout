(function() {
    'use strict';
    angular.module('skillsoutApp').controller('ResetPasswordController', ResetPasswordController);
    /** @ngInject */
    function ResetPasswordController($state, $scope) {
        var vm = this;
        // Data
        // Methods
        vm.forgotPassword = forgotPassword;
        ////////////
        /**
         * Forgot Password
         */
        function forgotPassword() {
            Accounts.resetPassword($state.params.token, vm.form.password, function(err) {
                if (!err) {
                    $state.go('login');
                }
            });
        }
        // Cleanup code
        $scope.$on('$destroy', function() {
            vm = {};
        });
    }
})();