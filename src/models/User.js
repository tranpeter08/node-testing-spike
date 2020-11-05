const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true},
});

userSchema.index({username: 1}, {unique: true})

module.exports = mongoose.model('User', userSchema, 'users');
