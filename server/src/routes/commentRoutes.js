// project-root/server/src/routes/commentRoutes.js

const express = require('express');
const CommentController = require('../controllers/CommentController');

const router = express.Router();

// Define comment routes
router.get('/comments/:postId', CommentController.getCommentsByPostId);
router.post('/comments', CommentController.createComment);
router.put('/comments/:id', CommentController.updateComment);
router.delete('/comments/:id', CommentController.deleteComment);

module.exports = router;
