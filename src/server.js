require('dotenv').config();
const mongoose = require('mongoose');
const { MONGO_URI, PORT, dbConnectionOptns } = require('./config/serverConfig');
const app = require('./app');
const { connectDb } = require('./utils/dbHelpers');

async function startServer(app, mongoUri, port) {
  try {
    const db = await mongoose.connect(mongoUri, dbConnectionOptns);
    console.log(`Connected to db ${db.connection.name}`);

    app.set('db', db);
    const server = app.listen(port);
    console.log(`Server is listening on port: ${port}`);

    return server;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

if (require.main === module) {
  startServer(app, MONGO_URI, PORT);
}
