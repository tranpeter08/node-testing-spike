const mongoose = require('mongoose');
const { Schema } = mongoose;

const petSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
});

module.exports = mongoose.model('Pet', petSchema, 'pets');
