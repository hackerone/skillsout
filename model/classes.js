import SimpleSchema from 'simpl-schema';
const classes = new SimpleSchema({
    name: {
        type: String
    },
    classId: {
        type: String
    },
    teacherId: {
        type: String
    },
    date:{
        type:Date
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
Classes = new Mongo.Collection('classes');
Classes.attachSchema(classes);
Classes.allow({
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