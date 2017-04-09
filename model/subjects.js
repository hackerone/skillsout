export const subjects = new SimpleSchema({
    name: {
        type: String
    },
    types: {
        type: [String]
    },
    createdAt: {
        type: Date
    },
    upadtedAt: {
        type: Date
    }
});
Subjects = new Mongo.Collection('subjects');
Subjects.allow({
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