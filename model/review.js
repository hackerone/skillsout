import SimpleSchema from 'simpl-schema';
const review = new SimpleSchema({
    review: {
        type: String
    },
    teacherId: {
        type: String
    },
    rating:{
        type:Number
    },
    reviewBy:{
        type:String
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
Reviews = new Mongo.Collection('review');
Reviews.attachSchema(review);
Reviews.allow({
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