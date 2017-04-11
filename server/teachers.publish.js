Meteor.publish('teachers', function(options, search) {
    console.log(options,search);
    var where = {
        'location': search.location,
    };

    var collection = Teachers.find(where, options);
    return collection;
});

