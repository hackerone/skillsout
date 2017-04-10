process.env.MAIL_URL='smtp://mahidaparth77@gmail.com:always1234@smtp.gmail.com:465';

Meteor.methods({
  sendEmail(to, from, subject, text) {
    // Let other method calls from the same client start running, without
    // waiting for the email sending to complete.
    this.unblock();
    Email.send({ to, from, subject, text });
  }
});