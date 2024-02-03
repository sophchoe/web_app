// project-root/server/src/controllers/PostController.js

const postService = require('../services/postService');

const PostController = {
  getPosts: async (req, res) => {
    try {
      const posts = await postService.getPosts();
      res.status(200).json(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getPostById: async (req, res) => {
    const postId = req.params.id;
    try {
      const post = await postService.getPostById(postId);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.status(200).json(post);
    } catch (error) {
      console.error('Error fetching post:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createPost: async (req, res) => {
    const postData = req.body;
    try {
      const newPost = await postService.createPost(postData);
      res.status(201).json(newPost);
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updatePost: async (req, res) => {
    const postId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedPost = await postService.updatePost(postId, updatedData);
      if (!updatedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.status(200).json(updatedPost);
    } catch (error) {
      console.error('Error updating post:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deletePost: async (req, res) => {
    const postId = req.params.id;
    try {
      const deletedPost = await postService.deletePost(postId);
      if (!deletedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.status(204).send(); // No content for successful deletion
    } catch (error) {
      console.error('Error deleting post:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = PostController;
