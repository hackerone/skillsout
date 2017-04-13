let Stripe = Npm.require('stripe')('sk_test_kQvSx95A2ZiPtfWPCBQ4rCpj');
export default class Payment {
    constructor() {}
    stripePayment(paymentObj) {
        var promise = new Promise(function(resolve, reject) {
            var source = card;
            var amount = 100 * parseFloat(paymentObj.amount);
            Stripe.customers.create({
                email: paymentObj.userEmail
            }).then(function(customer) {
                return Stripe.customers.createSource(customer.id, {
                    source: source
                });
            }).then(function(source) {
                return Stripe.charges.create({
                    amount: amount,
                    currency: 'usd',
                    customer: source.customer
                });
            }).then(function(charge) {
                var payment = {
                    paymentId: charge.id,
                    amount: amount,
                    teacherId: paymentObj.teacherId,
                    classId: paymentObj.classId
                };
                Payment.insert({
                    payment
                });
                resolve(charge);
            }).catch(function(err) {
                reject(err);
            });
        });
        return promise.then(function(data) {
            return data;
        })
    }
    paypalPayment(paymentObj) {
        var promise = new Promise(function(resolve, reject) {
            Meteor.Paypal.purchase(card, {
                total: paymentObj.amount,
                currency: 'USD'
            }, function(err, results) {
                if (err) {
                    reject(err); // error, rejected
                } else {
                    var payment = {
                        paymentId: results.payment.id,
                        amount: amount,
                        teacherId: paymentObj.teacherId,
                        classId: paymentObj.classId
                    };
                    Payment.insert({
                        payment
                    });
                    resolve(results);
                }
            });
        });
        return promise.then(function(data) {
            return data;
        })
    }
}