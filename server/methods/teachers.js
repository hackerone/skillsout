Meteor.methods({
    getTeachers: function(search,options) {
        var where = {
            'location': {'$regex': '.*' + (search.location || '') + '.*'},
            'skill.type': {'$regex': '.*' + (search.term || '') + '.*'},
        };
        console.log(options);
        var option={skip: options.offset, limit: options.limit};
        return Teachers.find(where,option).fetch();
    },
    getSingleTeacher:function(id){
         return Teachers.findOne({_id:id});
    },
    getLoadTeachers: function() {
        return Teachers.find({},{skip: 0, limit: 10}).fetch();
    }
});