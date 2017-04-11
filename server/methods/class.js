Meteor.methods({
    getClass: function(teacherId, options) {
        var option = {
            skip: options.offset,
            limit: options.limit
        };
        return Classes.find({
            teacherId: teacherId
        },option).fetch();
    }
});