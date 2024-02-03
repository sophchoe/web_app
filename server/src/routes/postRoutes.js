// project-root/server/src/routes/postRoutes.js

const express = require('express');
const PostController = require('../controllers/PostController');

const router = express.Router();

// Define post routes
router.get('/posts', PostController.getPosts);
router.get('/posts/:id', PostController.getPostById);
router.post('/posts', PostController.createPost);
router.put('/posts/:id', PostController.updatePost);
router.delete('/posts/:id', PostController.deletePost);

module.exports = router;
