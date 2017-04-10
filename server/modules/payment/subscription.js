// import {Collections} from '/imports/collections';
// import {Logger} from '/server/api';
// import Config from "./config";


// export default class Subscription {

//     constructor() {

//     }

//     /**
//      * Pass email id and upmetrics userid as arguments
//      * @param params
//      */
//     createSubscription(params) {
//         /* Retrive customer Id*/
//         let customer = Collections.Customers.findOne({_id: params.userId}, {fields: {customerId: 1}});

//         /*asyncs stripe call to create subscription*/
//         let options = {
//             customer: customer.customerId,
//             plan: params.stripeId,
//         };
//         var stripeSubscriptionCreateSync = Meteor.wrapAsync(Config.Stripe.subscriptions.create, Config.Stripe.subscriptions);
//         var subscription = stripeSubscriptionCreateSync(options);

//         if (subscription) {
//             let subData = {
//                 _id: subscription.id,
//                 businessId: params.businessId,
//                 planId: subscription.plan.id,
//                 status: subscription.status
//             };
//             Logger.info(subData);
//             this.createSubInLocal(customer.customerId, subData)
//         }
//     }

//     updateSubscription(params) {
//         /* Retrive customer */
//         let customer = Collections.Customers.findOne({
//             _id: params.userId
//         }, {fields: {customerId: 1, 'subscriptions': 1}});

//         /*subscription only related to current planId and businessId*/
//         var subscription = _.find(customer.subscriptions, function (sub) {
//             return sub.planId === params.stripeId && sub.businessId === params.businessId ? true : false;
//         });

//         /*asyncs stripe call to create subscription*/
//         let subId = subscription._id;
//         On subscription cancel
//         //console.log(params.status);
//         if (params.status === 'canceled') {
//             var stripeSubscriptionCreateSync = Meteor.wrapAsync(Config.Stripe.subscriptions.del, Config.Stripe.subscriptions);
//             var sub = stripeSubscriptionCreateSync(subId, {at_period_end: true});
//         }
//         /*On subscription Re-Subscribe*/
//         else if (params.status === 're-subscribe') {
//             var stripeSubscriptionCreateSync = Meteor.wrapAsync(Config.Stripe.subscriptions.update, Config.Stripe.subscriptions);
//             var sub = stripeSubscriptionCreateSync(subId, {plan: params.stripeId});
//             params.status = 'active';
//         }

//         /*on subscription cancel update status*/
//         if (sub) {
//             this.updateSubInLocal(customer.customerId, sub.id, {id: params.stripeId, status: params.status})
//         }
//     }

//     createSubInLocal(customerId, subData) {
//         Collections.Customers.update({customerId: customerId}, {$push: {subscriptions: subData}},
//             function (err, numAffected) {
//                 if (err) {
//                     Logger.warn(err);
//                 } else {
//                     Logger.warn('Subscription In local Cerated');
//                 }
//             });
//     }

//     updateSubInLocal(customerId, subscriptionId, plan) {
//         Collections.Customers.update({
//                 customerId: customerId,
//                 'subscriptions._id': subscriptionId
//             }, {$set: {'subscriptions.$.planId': plan.id, 'subscriptions.$.status': plan.status}},
//             function (err, numAffected) {
//                 if (err) {
//                     Logger.warn(err);
//                 } else {
//                     Logger.warn('Subscription In local updated');
//                 }
//             });
//     }


// }
