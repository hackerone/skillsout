Meteor.startup(function() {
  if(Locations.find().count() === 0) {
    var locations = [
      'london'
    ];
    locations.forEach(function(thing) {
      Locations.insert({
        name: thing,
        createdAt: new Date()
      });
    });
  }
});


