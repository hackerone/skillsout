const locations = new SimpleSchema({
    name: {
        type: String
    },
     createdAt: {
        type: Date
    },
    upadtedAt: {
        type: Date
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