// project-root/server/src/services/PostService.js

const Post = require('../models/Post');

const PostService = {
  getPosts: async () => {
    return await Post.find();
  },

  getPostById: async (postId) => {
    return await Post.findById(postId);
  },

  createPost: async (postData) => {
    return await Post.create(postData);
  },

  updatePost: async (postId, updatedData) => {
    return await Post.findByIdAndUpdate(postId, updatedData, { new: true });
  },

  deletePost: async (postId) => {
    return await Post.findByIdAndDelete(postId);
  },
  // Additional methods as needed
};

module.exports = PostService;
