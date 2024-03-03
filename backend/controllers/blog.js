const Blog = require("../models/blog.js");

// Get a single blog by ID
const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    res.status(200).json({ success: true, data: blog });
  } catch (err) {
    console.error("Error getting blog:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get all blogs
const getBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json({ success: true, data: blogs });
  } catch (err) {
    console.error("Error getting blogs:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create({
      title: req.body.title,
      bannerUrl: req.body.bannerUrl,
      content: req.body.content,
    });
    res.status(201).json({ success: true, data: blog });
  } catch (err) {
    console.error("Error creating blog:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Update a blog
const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    res.status(200).json({ success: true, data: blog });
  } catch (err) {
    console.error("Error updating blog:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Delete a blog
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    res.status(200).json({ success: true, data: blog });
  } catch (err) {
    console.error("Error deleting blog:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { getBlog, createBlog, updateBlog, deleteBlog, getSingleBlog };
