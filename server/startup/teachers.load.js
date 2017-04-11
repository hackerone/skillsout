Meteor.startup(function() {
    if (Teachers.find().count() === 0) {
        var teachers = [{
            name: 'Parth',
            about: 'I am good and well gifted',
            location: 'london',
            website: 'parthmahida.in',
            banner: {
                youtube: 'JGSGhb8tzoA'
            },
            price: 20,
            email: 'mahidaparth7@gmail.com',
            skill: {
                _id:'asd',
                subject: 'dance',
                type: 'salsa'
            },
            
            profileImage: 'img/profile_img.jpg'
        },
        {
            name: 'Mack',
            about: 'I am good and well gifted',
            location: 'london',
            website: 'parthmahida.in',
            banner: {
                youtube: 'JGSGhb8tzoA'
            },
            price: 20,
            email: 'mahidaparth7@gmail.com',
            skill: {
                _id:'asd',
                subject: 'dance',
                type: 'rumba'
            },
            
            profileImage: 'img/profile_img.jpg'
        },
        {
            name: 'Parth',
            about: 'I am good and well gifted',
            location: 'london',
            website: 'parthmahida.in',
            banner: {
                youtube: 'JGSGhb8tzoA'
            },
            price: 20,
            email: 'mahidaparth7@gmail.com',
            skill: {
                _id:'asd',
                subject: 'dance',
                type: 'salsa'
            },
            profileImage: 'img/profile_img.jpg'
        }];
        teachers.forEach(function(teacher) {
            Teachers.insert(teacher);
        });
    }
});