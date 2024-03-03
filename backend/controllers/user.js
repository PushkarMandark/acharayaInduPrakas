const User = require("../models/user.js");

const getUser = async (req, res) => {
  const users = await User.find();
  res.json({ data: users });
};

const createUser = async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  res.json({ data: user });
};

const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(user);
};

module.exports = { getUser, createUser, updateUser, deleteUser };
