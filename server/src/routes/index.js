// project-root/server/src/routes/index.js

const express = require('express');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

const router = express.Router();

// Combine all route files
router.use('/api', userRoutes);
router.use('/api', postRoutes);
router.use('/api', commentRoutes);

module.exports = router;
