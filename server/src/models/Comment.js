// project-root/server/src/models/Comment.js

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  // Additional fields as needed
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
