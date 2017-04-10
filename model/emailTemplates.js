import SimpleSchema from 'simpl-schema'; 
const emailTemplates = new SimpleSchema({
    name: {
        type: String
    },
    priority: {
        type: Number,
        optional: true,
        defaultValue: 1
    },
    enabled: {
        type: Boolean,
        defaultValue: true
    },
    language: {
        type: String,
        optional: true,
        defaultValue: "en"
    },
    source: {
        type: String,
        optional: true
    },
    subject: {
        type: String,
        optional: true
    },
    template: {
        type: String,
        optional: true,
        min: 20,
        // autoform: {
        //     rows: 5
        // }
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
EmailTemplates = new Mongo.Collection('emailTemplates');
EmailTemplates.attachSchema(emailTemplates);