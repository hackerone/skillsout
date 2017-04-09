export const teacher = new SimpleSchema({
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
        type: Number,
        decimal: true
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
        type: new SimpleSchema({
            text: {
                type: String
            },
            rating: {
                type: Number,
                decimal: true
            }
        })
    },
    profileImage: {
        type: String,
        optional: true
    },
     createdAt: {
        type: Date
    },
    upadtedAt: {
        type: Date
    }
});

Teachers = new Mongo.Collection('teachers');

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