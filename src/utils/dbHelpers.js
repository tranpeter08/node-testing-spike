const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { dbConnectionOptns } = require('../config/serverConfig');
const Pet = require('../models/Pet');
const User = require('../models/User');

module.exports = {
  async connectDb(uri, options) {
    const db = await mongoose.connect(uri, options);
    console.log(`...connected to db "${db.connection.name}"`);
    return db;
  },

  async connectTestDb() {
    const mongoServer = new MongoMemoryServer();

    const mongooseOpts = {
      // options for mongoose 4.11.3 and above
      // autoReconnect: true, <--- depracated
      // reconnectTries: Number.MAX_VALUE, <--- depracated
      // reconnectInterval: 1000, <--- depracated
      ...dbConnectionOptns,
    };

    mongoose.connection.on('error', (e) => {
      if (e.message.code === 'ETIMEDOUT') {
        console.log(e);
        mongoose.connect(mongoUri, mongooseOpts);
      }
      console.log(e);
    });

    mongoose.connection.once('open', () => {
      console.log(`... Connected to test db`);
    });

    const mongoUri = await mongoServer.getUri();
    await mongoose.connect(mongoUri, mongooseOpts);
  },

  async destroyDb() {
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
    console.log('... database dropped');
  },

  async clearCollections() {
    await Pet.deleteMany({});
    await User.deleteMany({});
  },
};
