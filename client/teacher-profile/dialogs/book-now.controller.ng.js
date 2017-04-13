'use strict';
angular.module('skillsoutApp').controller('DialogController', DialogController)

function DialogController($scope, amount, $stateParams, commonService) {
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
    vm.paymentOfClass = paymentOfClass;
    console.log($stateParams);

    function paymentOfClass(type) {
        var expiryDate = (vm.payment.expiryDate).split('/');
        if (type === 'stripe') {
            var card = {
                object: 'card',
                number: vm.payment.number,
                cvc: vm.payment.cvv2,
                'exp_month': expiryDate[0],
                'exp_year': expiryDate[1]
            };
            vm.stripeLoading = true;
        } else {
            var card = {
                name: vm.payment.name,
                number: vm.payment.number,
                type: 'visa',
                cvv2: vm.payment.cvv,
                expire_year: expiryDate[1],
                expire_month: expiryDate[0]
            };
            vm.paypalLoading = true;
        }
        var user = Meteor.user();
        var userEmail = user.emails[0].address;
        var paymentObj = {
            card: card,
            amount: vm.amount,
            userEmail: userEmail,
            teacherId: $stateParams.teacherId,
            classId: vm.classId
        }
        var promise = commonService.createPayment(type, paymentObj);
        promise.then(function(result) {
            if (!result) {
                // console.log(err);
                vm.error = 'Invalid Details';
            } else {
                console.log(result);
                vm.paymentForm = false;
            }
            if (type === 'stripe') {
                vm.stripeLoading = false;
            } else {
                vm.paypalLoading = false
            }
            console.log(vm.paymentForm);
        })
    }
}