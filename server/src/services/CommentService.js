// project-root/server/src/services/CommentService.js

const Comment = require('../models/Comment');

const CommentService = {
  getCommentsByPostId: async (postId) => {
    return await Comment.find({ postId });
  },

  createComment: async (postId, commentData) => {
    const newComment = new Comment({
      ...commentData,
      postId,
    });
    return await newComment.save();
  },

  updateComment: async (commentId, updatedData) => {
    return await Comment.findByIdAndUpdate(commentId, updatedData, { new: true });
  },

  deleteComment: async (commentId) => {
    return await Comment.findByIdAndDelete(commentId);
  },
  // Additional methods as needed
};

module.exports = CommentService;
