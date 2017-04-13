
let Stripe = Npm.require('stripe')('sk_test_kQvSx95A2ZiPtfWPCBQ4rCpj');
Meteor.methods({
    sendEmail(to, from, subject, text) {
        // Let other method calls from the same client start running, without
        // waiting for the email sending to complete.
        this.unblock();
        Email.send({
            to,
            from,
            subject,
            text
        });
    },
    createSubscription: function(card, amount, email) {
        try {
            // PaymentObj.chargeCustomer(params);
            var source = card;
            var amount = 100 * parseFloat(amount);
            Stripe.customers.create({
                email: email
            }).then(function(customer) {
                console.log(source);
                return Stripe.customers.createSource(customer.id, {
                    source: source
                });
            }).then(function(source) {
                console.log(amount);
                return Stripe.charges.create({
                    amount: amount,
                    currency: 'usd',
                    customer: source.customer
                });
            }).then(function(charge) {
                var payment = {
                    email:email,
                    teacherId:teacherId,
                    amount:amount,
                    paymentVia:'stripe'
                }
                Payment.insert(payment)
                return charge;
            }).catch(function(err) {
                console.log(err);
                return err.message;
            });
        } catch (e) {
            console.log(e);
            return e;
        }
    },
    createPaypalPayment: function(card, amount, email) {
        console.log(card,amount,email);
        var promise = new Promise(function(resolve, reject) {
            Meteor.Paypal.purchase(card, {
                total: amount,
                currency: 'USD'
            }, function(err, results) {
                if (err) {
                    console.log(err);
                    reject(err); // error, rejected
                } else {
                    console.log(results);
                    resolve(results);
                }
            });
        });
        return promise.then(function(data) {
            console.log(data);
            return data;
        })
    }
});
