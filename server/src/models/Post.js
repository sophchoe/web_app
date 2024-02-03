// project-root/server/src/models/Post.js

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now },
  // Additional fields as needed
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
