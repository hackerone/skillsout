module.exports ={
  // Server authentication info
  "servers": [
    {
      "host": "ec2-52-214-132-184.eu-west-1.compute.amazonaws.com",
      "username": "ec2-user",
      "password": "password"
      //"pem": "~/.ssh/id_rsa"
    }
  ],

  // Install MongoDB in the server, does not destroy local MongoDB on future setup
  "setupMongo": true,

  // WARNING: Node.js is required! Only skip if you already have Node.js installed on server.
  "setupNode": true,

  // WARNING: If nodeVersion omitted will setup 0.10.36 by default. Do not use v, only version number.
  "nodeVersion": "6.10.2",

  // Install PhantomJS in the server
  "setupPhantom": true,

  // Show a progress bar during the upload of the bundle to the server. 
  // Might cause an error in some rare cases if set to true, for instance in Shippable CI
  "enableUploadProgressBar": true,

  // Application name (No spaces)
  "appName": "skillsout",

  // Location of app (local directory)
  "app": "/home/ec2-user/skillsout",

  // Configure environment
  "env": {
    "ROOT_URL": "http://ec2-52-214-132-184.eu-west-1.compute.amazonaws.com",
    "MONGO_URL": 'mongodb://localhost/meteor',
  },
  // Meteor Up checks if the app comes online just after the deployment
  // before mup checks that, it will wait for no. of seconds configured below
  "deployCheckWaitTime": 15
}