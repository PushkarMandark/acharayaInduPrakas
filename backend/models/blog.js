const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  bannerUrl: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
