Meteor.startup(function() {
    if (Subjects.find().count() === 0) {
        var subjects = [{
            name: 'dance',
            types: ['salsa', 'rumba', 'corridos', 'rumba', 'tejano']
        }, {
            name: 'music',
            types: ['singing', 'flute', 'piano', 'drum']
        }];
        subjects.forEach(function(subject) {
            Subjects.insert({
                name: subject.name,
                types: subject.types
            });
        });
    }
});


