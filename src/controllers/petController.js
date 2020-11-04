const Pet = require('../models/Pet');

module.exports = {
  async getAllByUserId(userId) {
    return await Pet.find({ userId });
  },

  async getOneById(petId) {
    return await Pet.findById(petId);
  },

  async create(payload) {
    return await Pet.create(payload);
  },

  async updateOneById(id, payload) {
    return await Pet.updateOne({ _id: id, payload });
  },

  async deleteOneById(id) {
    return await Pet.deleteOne({ _id: id });
  },
};
