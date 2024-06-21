import User from "../Models/users.models.js";
import bcrypt from "bcrypt";

let createUser = async (req, res) => {
  try {
    let newData = req.body;
    console.log("user Data ");
    let newUser = new User(newData);

    let data = await newUser.save();

    res.send(data);
  } catch (err) {
    res.send({ result: false, error: err.message });
  }
};

let allUserData = async (req, res) => {
  let data = await User.find({});
  res.send(data);
};

let getOneUser = async (req, res) => {
  // let id = req.params.id;
  // let data = await User.findById(id);
  let { email } = req.body;
  let data = await User.findOne({ email: email });
  res.send(data);
};

let replaceUser = async (req, res) => {
  let { email } = req.body;
  let data = await User.findOneAndReplace(
    { email: email },
    { ...req.body },
    { new: true }
  );
  res.send(data);
};

let updateUser = async (req, res) => {
  let { email } = req.body;
  let data = await User.findOneAndUpdate(
    { email: email },
    { ...req.body },
    { new: true }
  );
  res.send(data);
};

let deleteUser = async (req, res) => {
  let id = req.params.id;
  let data = await User.findByIdAndDelete(id);
  res.send(data);
};

let loginUser = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email: email }); //checking user in the database

    if (!user) {
      // user doent exist
      return res.send({
        res: false,
        message: " User not exist // EmailID/password is incorrect ",
      });
    }

    let result = await bcrypt.compare(password, user.password); // comparring the password using bcrypt

    if (result) {
      return res.send({ res: true, message: " Login done " });
    } else {
      return res.send({
        res: false,
        message: "password is incorrect // EmailID/password is incorrect ",
      });
    }
  } catch (err) {
    res.send({ res: false, message: err.message });
  }
};

let signupUser = async (req, res) => {
  let { userName, email, password } = req.body;

  try {
    // checking is user present or not

    let user = await User.findOne({ email: email });

    if (user) {
      // if user present then dono create data
      return res.send({ res: false, message: "user already exist " });
    }

    let salt = await bcrypt.genSalt(10); // creating salt for hashing
    let hashedPassword = await bcrypt.hash(password, salt); // creating hashed password

    let newUser = new User({
      //creating new user
      userName: userName,
      email: email,
      password: hashedPassword,
    });
    let data = await newUser.save(); // saving newUser in dataBase
    return res.send(data);
  } catch (err) {
    res.send({ res: false, message: err.message });
  }
};

export {
  createUser,
  updateUser,
  deleteUser,
  getOneUser,
  replaceUser,
  allUserData,
  loginUser,
  signupUser,
};
