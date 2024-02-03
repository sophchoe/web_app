// project-root/server/src/routes/userRoutes.js

const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

// Define user routes
router.get('/users/:id', UserController.getUserById);
router.post('/users', UserController.createUser);
// Add more routes as needed

module.exports = router;
