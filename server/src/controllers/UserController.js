// project-root/server/src/controllers/UserController.js

const userService = require('../services/userService');

const UserController = {
  getUserById: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await userService.getUserById(userId);
      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createUser: async (req, res) => {
    const userData = req.body;
    try {
      const newUser = await userService.createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = UserController;
