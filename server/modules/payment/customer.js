// import {Collections} from '/imports/collections';
// import {Hooks, Logger} from '/server/api';
// import Subscription from "./subscription";
// import Config from "./config";

// export default class Customer {

//     constructor() {
//         this.subscription = new Subscription;
//     }

//     /**
//      * Pass email id and upmetrics userid as arguments
//      * @param params
//      */
//     createCustomer(params) {
//         /*Stripe call to create customer*/
//         let options = {
//             description: 'Customer for emily ' + params.emails[0].address,
//             email: params.emails[0].address
//         };
//         var stripeCustomersCreateSync = Meteor.wrapAsync(Config.Stripe.customers.create, Config.Stripe.customers);
//         var customer = stripeCustomersCreateSync(options);
//         let userId = params._id;
//         this.insertCustomer(customer, userId);
//     }

//     /*insert Customer into database Collection*/
//     insertCustomer(customer, userId) {
//         if (customer) {
//             let addData = {
//                 _id: userId,
//                 customerId: customer.id
//             };
//             /*insert customer data*/
//             Collections.Customers.insert(addData, function (err, numAff) {
//                 if (err) {
//                     Logger.warn(err);
//                 } else {
//                     Logger.warn(numAff);
//                     /* Events that returns a customer object */
//                     Hooks.Events.emit('upmevents::customerCreated', customer);
//                 }
//             });
//         }
//     }

//     /*Delete Customer from database Collection*/
//     deleteCustomer(customerId) {
//         Collections.Customers.remove({customerId: customerId}, function (err, numAff) {
//             if (err) {
//                 Logger.warn(err);
//             } else {
//                 Logger.warn(numAff, 'Customer Deleted Successfully');
//             }
//         });
//     }


//     createCardOnStripe(customerId, tokenId) {
//         Config.Stripe.customers.createSource(customerId, {
//             source: tokenId
//         }, function (err, customer) {
//             if (err) {
//                 Logger.warn(err);
//             } else {
//                 Logger.info('Card Details updated for', customerId);
//             }
//         });
//     }

//     updateCardOnLocal(customerId, cardData) {
//         //console.log('serverCall', cardData)
//         Collections.Customers.update(
//             {customerId: customerId},
//             {$set: {card: cardData}},
//             function (err, numAff) {
//                 if (err) {
//                     Logger.warn(err);
//                 } else {
//                     Logger.warn('Card Created Successfully in local database');
//                 }
//             });
//     }

//     /**
//      * Stripe token responce and userId from stripe.card.createToken
//      * @param params
//      */
//     assignCard(token, userId) {

//         let cardData = {
//             _id: token.card.id,
//             cardNumber: token.card.last4
//         };
//         /*customer data before card update*/
//         const customer = Collections.Customers.findOne({_id: userId}, {fields: {customerId: 1, card: 1}});
//         let createCardOnStripe = this.createCardOnStripe;
//         /* push card details in customers collection*/
//         if (customer.card && _.size(customer.card) > 0) {
//             Config.Stripe.customers.deleteCard(
//                 customer.customerId,
//                 customer.card._id,
//                 function (err, confirmation) {
//                     if (err) {
//                         Logger.warn('Unable to delete card' + err)
//                     } else {
//                        // console.log(confirmation);
//                         /* Add Card Details to stripe customer accounts*/
//                         createCardOnStripe(customer.customerId, token.id);
//                     }
//                 }
//             );
//         } else {
//             /* Add Card Details to stripe customer accounts*/
//             createCardOnStripe(customer.customerId, token.id);
//         }
//     }
// }
