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
    return await User.create(user);
  },

  async updateUsername(id, username) {
    return await User.updateOne({ _id: id, username });
  },

  async deleteOneById(id) {
    return await User.deleteOne({ _id: id });
  },
};
