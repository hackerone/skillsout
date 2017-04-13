import SimpleSchema from 'simpl-schema';
const payment = new SimpleSchema({
    paymentId: {
        type: String,
        optional:true
    },
    teacherId: {
        type: String,
        optional:true
    },
    amount: {
        type: String,
        optional:true
    },
    classId:{
    	type:String,
    	optional:true
    },
    createdAt: {
        type: Date,
        optional: true,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {
                    $setOnInsert: new Date()
                };
            } else {
                this.unset();
            }
        }
    },
    updatedAt: {
        type: Date,
        optional: true,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        }
    }
});
Payment = new Mongo.Collection('payment');
Payment.attachSchema(payment);
Payment.allow({
    insert: function(userId, thing) {
        return true;
    },
    update: function(userId, thing, fields, modifier) {
        return true;
    },
    remove: function(userId, thing) {
        return true;
    }
});