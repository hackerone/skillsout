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
  mongo: {
    port: 27017,
    version: '3.4.1',
    servers: {
      one: {}
    }
  }
};
