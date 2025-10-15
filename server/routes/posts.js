cat > routes/posts.js <<'EOF'
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Post = require('../models/Post');

// list posts
router.get('/', async (req,res) => {
  const posts = await Post.find().populate('author','name').sort({createdAt:-1});
  res.json(posts);
});

// create post
router.post('/', auth, async (req,res) => {
  const { title, body, imageUrl } = req.body;
  const post = new Post({ title, body, imageUrl, author: req.user.id });
  await post.save();
  res.json(post);
});

module.exports = router;
EOF
