const User = require("../models/user.js");

// Get all users
const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, data: users });
  } catch (err) {
    console.error("Error getting users:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Update a user
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { getUser, createUser, updateUser, deleteUser };
