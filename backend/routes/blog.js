const express = require("express");
const router = express.Router();
const {
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
} = require("../controllers/blog.js");

// Get  blog
router.get("/blog/:id", getSingleBlog);
// Get all blogs
router.get("/blogs", getBlog);

// Create a new blog
router.post("/blogs", createBlog);

// Update a blog by ID
router.put("/blogs/:id", updateBlog);

// Delete a blog by ID
router.delete("/blogs/:id", deleteBlog);

module.exports = router;
