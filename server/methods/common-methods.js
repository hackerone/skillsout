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
    createPayment: async function(type, paymentObj) {
        console.log(type);
        if (type === 'stripe') {
            // var promise = new Promise(function(resolve, reject) {
            var source = paymentObj.card;
            var amount = 100 * parseFloat(paymentObj.amount);
            const payment = await Stripe.customers.create({
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
                //console.log(charge);
                var payment = {
                    paymentId: charge.id,
                    amount: amount,
                    teacherId: paymentObj.teacherId,
                    classId: paymentObj.classId
                };
                return payment;
                //createPayment(payment);
                // resolve(payment);
            }).catch(function(err) {
                console.log(err);
                // reject(err);
            });
            console.log(payment);
            Payment.insert(payment);
            //  });
        } else {
            var promise = new Promise(function(resolve, reject) {
                Meteor.Paypal.purchase(paymentObj.card, {
                    total: paymentObj.amount,
                    currency: 'USD'
                }, function(err, results) {
                    if (err) {
                        console.log(err);
                        reject(err); // error, rejected
                    } else {
                        if (results.saved) {
                            var payment = {
                                paymentId: results.payment.id,
                                amount: paymentObj.amount,
                                teacherId: paymentObj.teacherId,
                                classId: paymentObj.classId
                            };
                            Payment.insert(payment);
                        }
                        console.log(results)
                        resolve(results);
                    }
                });
            });
            return promise.then(function(data) {
                return data;
            })
        }

        function createPayment(payment) {}
    }
});

function stripePayment(paymentObj) {
    console.log(paymentObj);
}

function paypalPayment(paymentObj) {}