Meteor.publish('teachers', function(options, search) {
    console.log(options,search);
    var where = {
        'location': search.location,
    };

    var collection = Teachers.find(where, options);
    console.log(collection.count())
    return collection;
});

