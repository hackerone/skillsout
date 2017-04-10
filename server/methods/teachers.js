Meteor.methods({
    getTeachers: function(search) {
        var where = {
            'location': {'$regex': '.*' + (search.location || '') + '.*'},
            'skill.type': {'$regex': '.*' + (search.term || '') + '.*'},
        };
        return Teachers.find(where).fetch();
    },
    getSingleTeacher:function(id){
         return Teachers.findOne({_id:id});
    },
    getLoadTeachers: function() {
        return Teachers.find({},{skip: 0, limit: 10}).fetch();
    }
});