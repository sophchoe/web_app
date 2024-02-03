// project-root/server/src/models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Additional fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
