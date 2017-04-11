'use strict';
angular.module('skillsoutApp').controller('DialogController', DialogController)

function DialogController($scope,amount) {
    var vm = this;
    vm.paymentForm = true;
    vm.stripeLoading = false;
    vm.paypalLoading = false;
    vm.payment = {
        name: 'Buster Bluth',
        number: '4111111111111111',
        type: 'visa',
        cvv2: '123',
        expiryDate: '01/2020'
    };
    vm.amount = amount;
    //methods
    vm.payWithPaypal = payWithPaypal;
    vm.payWithStripe = payWithStripe;

    function payWithPaypal() {
        var expiryDate = (vm.payment.expiryDate).split('/');
        var cardData = {
            name: vm.payment.name,
            number: vm.payment.number,
            type: 'visa',
            cvv2: vm.payment.cvv,
            expire_year: expiryDate[1],
            expire_month: expiryDate[0]
        };
        console.log(cardData);
        var cardData = {
            name: 'Buster Bluth',
            number: '4111111111111111',
            type: 'visa',
            cvv2: '123',
            expire_year: '2020',
            expire_month: '01'
        }
        Meteor.Paypal.purchase(cardData, {
            total: '10',
            currency: 'USD'
        }, function(err, results) {
            if (err) {
                console.error(err);
            } else {
                console.log(results);
            }
        });
    }

    function payWithStripe() {
        var expiryDate = (vm.payment.expiryDate).split('/');
        var card = {
            object: 'card',
            number: vm.payment.number,
            cvc: vm.payment.cvv2,
            'exp_month': expiryDate[0],
            'exp_year': expiryDate[1]
        };
        
        var amount = parseInt(vm.amount);
        var user = Meteor.user();
        var userEmail = user.emails[0].address;

        Meteor.call('createSubscription', card, vm.amount, userEmail, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
    }
}