let Stripe =  Npm.require('stripe')('sk_test_kQvSx95A2ZiPtfWPCBQ4rCpj');
export default class Payment {
	constructor(){

	}

	chargeCustomer(params){

		var source = params.card;
    	var amount = params.amount;
    	console.log(Stripe);
        Stripe.customers.create({
            email: params.email
        }).then(function(customer) {
            
            return stripe.customers.createSource(customer.id, {
                source: source
            });
        }).then(function(source) {
             
            return stripe.charges.create({
                amount: amount,
                currency: 'usd',
                customer: source.customer
            });
        }).then(function(charge) {
            console.log(charge);
            return charge;
        }).catch(function(err) {
            console.log(err);
            return err;
        });

	}
}