(function () {
    'use strict';

    angular
        .module('app.account.auth.verify')
        .controller('verifyEmailController', verifyEmailController);

    /** @ngInject */
    function verifyEmailController($state, $scope) {

        var vm = this;

        // Data

        // Methods

        //////////////////////
        switch ($state.params.type) {
            case 'verify-email':
                accountVerificationLink($state.params.token);
                break;
        }


        function accountVerificationLink(token) {
            Accounts.verifyEmail(token, function (err) {
                if (err) {
                    console.log(err);
                    return;
                }
                var data = Meteor.user();
                var verified = {};
                var i = 0;
                for (i = 0; i < data.emails.length; i++) {
                    if (data.emails[i].verified) {
                        verified = data.emails[i];
                    }
                }
                Meteor.users.update({_id: Meteor.userId()}, {
                    $set: {
                        emails: [verified]
                    }
                }, function (err) {
                    if (!err) {
                        $state.go('app.account.setup', {userId: Meteor.userId()});
                    }
                });
            });
        }

        // Cleanup code
        $scope.$on('$destroy', function () {
            vm = {};
        });

    }
})();
