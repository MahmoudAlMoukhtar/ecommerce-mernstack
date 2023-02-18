const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const fetchAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const fetchUserById = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const user = await User.findById(_id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const deleteUserById = async (req, res) => {
  const {id: _id} = req.params;
  console.log(_id);
  try {
    const userDeleted = await User.findByIdAndDelete(_id);

    res.status(200).json(userDeleted);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const signin = async (req, res) => {
  const {email, password} = req.body;
  try {
    const existingUser = await User.findOne({email});
    if (!existingUser)
      return res.status(404).json({message: "sorry this user doesnt exist!"});
    const isPasswordCorrect = await bcrypt.compareSync(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res
        .status(400)
        .json({message: "sorry password or email is error"});

    const token = jwt.sign(
      {email: existingUser.email, id: existingUser._id},
      "132jwtsecretkey123"
    );
    res.status(200).json({resulte: existingUser, token});
  } catch (err) {
    res.status(500).json({message: "Somthing error in signin"});
  }
};

const signup = async (req, res) => {
  const {fullName, email, password, confirmPassword} = req.body;
  //console.log(email);
  try {
    const existingUser = await User.findOne({email});
    //console.log(existingUser);
    if (existingUser)
      return res.status(404).json({message: "sorry this user already exist!"});
    if (password !== confirmPassword)
      return res.status(404).json({message: "Passwords not match"});

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const resulte = await new User({fullName, email, password: hash});
    await resulte.save();
    const token = jwt.sign(
      {fullName: resulte.fullName, email: resulte.email, id: resulte._id},
      "132jwtsecretkey123"
    );
    res.status(200).json({resulte, token});
  } catch (err) {
    res.status(500).json({message: "Somthing error in signin"});
  }
};

module.exports = {
  signin,
  signup,
  fetchAllUsers,
  deleteUserById,
  fetchUserById,
};
