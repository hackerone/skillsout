import SimpleSchema from 'simpl-schema'; 
const locations = new SimpleSchema({
    name: {
        type: String
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
Locations = new Mongo.Collection('locations');
Locations.attachSchema(locations);
Locations.allow({
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