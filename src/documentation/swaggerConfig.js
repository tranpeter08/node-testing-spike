const schemas = require('./schemas');
const parameters = require('./parameters');
const responses = require('./responses');
const requestBodies = require('./requestBodies');

const options = {
  definition: {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: 'API Documentation Spike', // Title (required)
      version: '1.0.0', // Version (required)
      description: 'An API for spiking.',
      contact: {
        name: 'Robin Hood',
        emal: 'greenhat@blackforest.com'
      }
    },
    components: {
      schemas,
      parameters,
      responses,
      requestBodies
    }
  },
  // Path to the API docs
  apis: ['./src/app.js', './src/routes/*.js'],

};

module.exports = options;