const User = require('../models/User');

module.exports = {
  async getAll() {
    return await User.find({});
  },

  async getOneById(id) {
    return await User.findById(id);
  },

  async getOneByUsername(username) {
    return await User.findOne({ username });
  },

  async create(user) {
    // const match = await User.findOne({username: user.username});

    // if (match) {
    //   throw {type: 'ValidationError', message: 'Invalid username', code: 400}
    // }
    return await User.create(user);
  },

  async updateUsername(id, username) {
    return await User.updateOne({ _id: id, username });
  },

  async deleteOneById(id) {
    return await User.deleteOne({ _id: id });
  },
};
