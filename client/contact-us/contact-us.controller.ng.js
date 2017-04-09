'use strict'
angular.module('skillsoutApp').controller('ContactUsCtrl', function($scope) {
    var vm = this;
    //methods
    vm.sendContactMail = sendContactMail;

    function sendContactMail() {
        var to = 'mahidaparth77@gmail.com';
        var from = vm.form.email;
        var subject = 'Inquiry';
        var msg = vm.form.description +'from<br>' + vm.form.name;
        Meteor.call('sendEmail', to, from, subject, msg);
    }
});