const schemas = require('./schemas');

const options = {
  definition: {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: 'API Documentation Spike', // Title (required)
      version: '1.0.0', // Version (required)
    },
    components: {
      schemas
    }
  },
  // Path to the API docs
  apis: ['./src/app.js', './src/routes/*.js', '.src/documentation/**/*.js'],

};

module.exports = options;