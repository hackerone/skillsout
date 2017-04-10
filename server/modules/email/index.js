process.env.MAIL_URL='smtp://mahidaparth77@gmail.com:always1234@smtp.gmail.com:465';
import { Random } from 'meteor/random';
export default class email {
    constructor() {
        this.emailTemplates ={
            'activate-user':{
                body:'Hello {{username}},<br> You Have been sussessfully registered to skillsout.<br>Thank You',
                subject:'REgstration Successfull'
            }
        } 
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
        SSR.compileTemplate(tpl, this.emailTemplates[tpl].body);
        emailBody = SSR.render(tpl, sendData);

        // find Email Subject
        SSR.compileTemplate(tpl, this.emailTemplates[tpl].subject);
        emailSubject = SSR.render(tpl, sendData);

        // Assign in one Object
        emailDetail = {
            to: newEmail,
            from: 'parth@test',
            subject: emailSubject,
            html: emailBody
        };
            console.log(emailDetail);
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
        let user = Accounts.findUserByEmail(newEmail);
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
            // sendData = Object.assign({
            //     url: `${config.clientUrl}${configUrl}${tokenRecord.token}`,
            //     newEmail: newEmail
            // }, sendingDataObj);

            return this.sendAccountsEmail(newEmail, tpl, sendData);
        }
    }

}
