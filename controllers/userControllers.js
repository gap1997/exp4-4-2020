const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const user = require("../models/userModel");
const userModel = require("../models/userModel");

//@desc Register user
//@route post/api/users/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory !...");
  }

  const userAvailable = await user.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User Already registred !...");
  }

  //hash password
  const hashPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hashPassword);
  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });
  console.log(`User Created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("user data not valid");
  }

  res.json({ message: "Register the user" });
});

//@desc Login user
//@route post/api/users/login
//@access public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
});

//@desc current userinfo
//@route post/api/users/current
//@access private

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current  user" });
});

module.exports = { registerUser, loginUser, currentUser };
