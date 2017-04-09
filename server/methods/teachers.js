Meteor.methods({
    getTeachers: function(search) {
        var where = {
            'location': {'$regex': '.*' + (search.location || '') + '.*'},
            'skill.type': {'$regex': '.*' + (search.term || '') + '.*'},
        };
        return Teachers.find(where).fetch();
    }
});