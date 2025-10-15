cat > models/Post.js <<'EOF'
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  imageUrl: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);
EOF
