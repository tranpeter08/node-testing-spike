module.exports = {
  PORT: process.env.PORT || 8000,
  MONGO_URI: 'mongodb://localhost/node-testing-spike',
  loggingFormat: process.env.NODE_ENV === 'production' ? 'tiny' : 'dev',
  dbConnectionOptns: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
};
