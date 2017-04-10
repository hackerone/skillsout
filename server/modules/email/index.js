import config from "/imports/webhooks/config";

export default class email {
    constructor() {
    }

    /**
     * Send Accounts Email
     * @param newEmail (New Entered email address)
     * @param tpl (Template name )
     * @param sendData( send Email Template dynamic data )
     * @returns {*}
     */
    sendAccountsEmail(newEmail, tpl, sendData) {
        let emailBody, emailSubject, emailDetail;

        // find Email Body
        SSR.compileTemplate(tpl, Upmetrics.Email.getTemplate(tpl));
        emailBody = SSR.render(tpl, sendData);

        // find Email Subject
        SSR.compileTemplate(tpl, Upmetrics.Email.getSubject(tpl));
        emailSubject = SSR.render(tpl, sendData);

        // Assign in one Object
        emailDetail = {
            to: newEmail,
            from: 'parth@test',
            subject: emailSubject,
            html: emailBody
        };

        // send email
        return Email.send(emailDetail);
    }

    /**
     * send Email Verification
     * @param newEmail { inserted Email }
     * @param tpl { Search Collection title }
     * @param configUrl { Set Url To send }
     * @param updateWhen { data change in collection }
     * @param sendingData { send extra option }
     * @returns {*}
     */
    sendEmailVerification(newEmail, tpl, configUrl, updateWhen, sendingData) {
        let tokenRecord, sendData;
        // search Data By Entered Email
        user = Accounts.findUserByEmail(newEmail);
        if (user) {
            tokenRecord = {
                token: Random.secret(),
                when: new Date()
            };

            switch (updateWhen) {
                case 'emailSend':
                    tokenRecord.address = newEmail;
                    Meteor.users.update(
                        {_id: user._id},
                        {$push: {'services.email.verificationTokens': tokenRecord}});
                    break;
                case 'forgotPassword':
                    tokenRecord.email = newEmail;
                    Meteor.users.update({_id: user._id}, {
                        $set: {
                            "services.password.reset": tokenRecord
                        }
                    });
                    break;
            }
            // add email token
            let sendingDataObj = sendingData || {};

            // mearge Send Data And Extra Options
            sendData = Object.assign({
                url: `${config.clientUrl}${configUrl}${tokenRecord.token}`,
                newEmail: newEmail
            }, sendingDataObj);

            return this.sendAccountsEmail(newEmail, tpl, sendData);
        }
    }

}
