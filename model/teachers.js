 import SimpleSchema from 'simpl-schema';
 const teacher = new SimpleSchema({
     name: {
         type: String
     },
     about: {
         type: String
     },
     location: {
         type: String
     },
     website: {
         type: String
     },
     banner: {
         type: String
     },
     price: {
         type: Number
     },
     email: {
         type: String
     },
     skill: {
         type: new SimpleSchema({
             _id: {
                 type: String
             },
             subject: {
                 type: String
             },
             expertise: {
                 type: String
             }
         })
     },
     review: {
         type: Array
     },
     'review.$': {
         type: new SimpleSchema({
             text: {
                 type: String
             },
             rating: {
                 type: Number
             }
         })
     },
     profileImage: {
         type: String,
         optional: true
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
 Teachers = new Mongo.Collection('teachers');
 //Teachers.attachSchema(teacher);
 Teachers.allow({
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