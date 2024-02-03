// project-root/server/src/controllers/CommentController.js

const commentService = require('../services/commentService');

const CommentController = {
  getCommentsByPostId: async (req, res) => {
    const postId = req.params.postId;
    try {
      const comments = await commentService.getCommentsByPostId(postId);
      res.status(200).json(comments);
    } catch (error) {
      console.error('Error fetching comments:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createComment: async (req, res) => {
    const { postId, commentData } = req.body;
    try {
      const newComment = await commentService.createComment(postId, commentData);
      res.status(201).json(newComment);
    } catch (error) {
      console.error('Error creating comment:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateComment: async (req, res) => {
    const commentId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedComment = await commentService.updateComment(commentId, updatedData);
      if (!updatedComment) {
        return res.status(404).json({ error: 'Comment not found' });
      }
      res.status(200).json(updatedComment);
    } catch (error) {
      console.error('Error updating comment:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteComment: async (req, res) => {
    const commentId = req.params.id;
    try {
      const deletedComment = await commentService.deleteComment(commentId);
      if (!deletedComment) {
        return res.status(404).json({ error: 'Comment not found' });
      }
      res.status(204).send(); // No content for successful deletion
    } catch (error) {
      console.error('Error deleting comment:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = CommentController;
