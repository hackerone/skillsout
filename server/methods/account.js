import email from "../modules/email";
const EmailObj = new email;
Meteor.methods({
    deleteAccount: function (userId) {
        if (this.userId === userId) {
            return Meteor.users.remove({
                _id: this.userId
            });
        }
    },
    confirmEmail: function (newEmail) {
        /**
         * Change User Email address
         */
        this.unblock();
        Accounts.addEmail(this.userId, newEmail, false);
        EmailObj.sendEmailVerification(newEmail, "verification-mail", '/pages/auth/verify/verify-email/', 'emailSend');
    },
    forgetEmail: function (newEmail) {
        /**
         * click on forgot password
         */
        this.unblock();
        EmailObj.sendEmailVerification(newEmail, "reset-password-mail", '/reset-password', 'forgotPassword');
    },
    activeUser: function (newEmail) {
        /**
         * sign up a new user
         */
        // add email in user
        this.unblock();
        Accounts.addEmail(this.userId, newEmail, false);
        EmailObj.sendEmailVerification(newEmail, "activate-user", "/pages/auth/verify/verify-email/", 'emailSend');
    }
});