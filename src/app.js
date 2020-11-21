const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const apiRouter = require('./routes/router');
const path = require('path');

const app = express();

app.use(express.json(), helmet(), morgan('tiny'));
app.use('/api', apiRouter);

/**
 * @swagger
 * /test:
 *   get:
 *     summary: Test for server response
 *     description: Test for server response
 *     tags:
 *     - app
 *     responses:
 *       '200':
 *         description: Payload.
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'ok!'
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorRespBody'     
 */
app.get('/test', (req, res, next) => {
  res.send({ message: 'ok!' });
});

app.get('/redoc', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/../redoc.html'));
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
