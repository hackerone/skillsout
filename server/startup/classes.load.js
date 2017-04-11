Meteor.startup(function() {
    if (Classes.find().count() === 0) {
        var classes = [{
            name: 'Salsa Beginner',
            teacherId: 'z3NasEnaX94oeuHHS',
            classId: 'SW115JA',
            date: new Date()
        }, {
            name: 'Salsa Intermidiate',
            teacherId: 'z3NasEnaX94oeuHHS',
            classId: 'SW115JA',
            date: new Date()
        }, {
            name: 'Salsa Advanced',
            teacherId: 'z3NasEnaX94oeuHHS',
            classId: 'SW115JA',
            date: new Date()
        }];
        classes.forEach(function(asd) {
            Classes.insert(asd);
        });
    }
});