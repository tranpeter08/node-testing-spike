const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const apiRouter = require('./routes/router');

const app = express();

app.use(express.json(), helmet(), morgan('short'));

app.use('/api', apiRouter);
app.get('/', (req, res, next) => {
  res.send({ message: 'ok!' });
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ error: error.message });
});

module.exports = app;
