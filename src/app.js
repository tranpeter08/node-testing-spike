const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const apiRouter = require('./routes/router');

const app = express();

app.use(express.json(), helmet());

app.use('/api', apiRouter);
app.get('/', (req, res, next) => {
  res.send({ message: 'ok!' });
});

app.use((error, req, res, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    return res.status(400).json({ message: error.message });
  }

  if (error.type === 'ValidationError') {
    return res.status(error.code).json({error})
  }

  res.status(500).json({ error: error.message });
});

module.exports = app;
