// project-root/server/src/services/UserService.js

const User = require('../models/User');

const UserService = {
  getUserById: async (userId) => {
    return await User.findById(userId);
  },

  createUser: async (userData) => {
    return await User.create(userData);
  },
  // Additional methods as needed
};

module.exports = UserService;
