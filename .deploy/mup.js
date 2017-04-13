module.exports = {
  servers: {
    one: {
      host: 'ec2-52-214-132-184.eu-west-1.compute.amazonaws.com',
      username: 'ec2-user',
      pem: './path/to/pem'
    }
  },

  meteor: {
    // TODO: change app name and path
    name: 'Skiillsout',
    path: '../app',
    servers: {
      one: {},
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://ec2-52-214-132-184.eu-west-1.compute.amazonaws.com',
      MONGO_URL: 'mongodb://localhost/meteor',
    }
  },
  // Meteor Up checks if the app comes online just after the deployment
  // before mup checks that, it will wait for no. of seconds configured below
  "deployCheckWaitTime": 15
};