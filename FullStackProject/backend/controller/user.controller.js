import User from "../model/user.model.js";

let tokenGeneration = async function (user) {
  let token = await user.generateToken();
  return token;
};

let login = async (req, res) => {
  let { email, password } = req.body;

  try {
    let existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      // checking the user is present or not
      return res
        .status(404)
        .send({ result: false, message: "User doesnot exist" });
    }

    let response = await existingUser.checkPassword(password); // checking the password

    if (response) {
      let token = await tokenGeneration(existingUser); // genertaing the token
      let option = { httpOnly: true, secure: true };

      return res
        .status(201)
        .cookie("Token", token, option)
        .send({
          result: true,
          message: "Login succesfull",
          data: existingUser,
        });
    } else {
      return res
        .status(401)
        .send({ result: false, message: "Password is incorrect " });
    }
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

let signup = async (req, res) => {
  let { email } = req.body;

  try {
    let existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res
        .status(409)
        .send({ result: false, message: "User already Exist " });
    }

    let newUser = new User(req.body); // we are creating the new user

    let user = await newUser.save(); // saving the new user

    let token = await tokenGeneration(user); // generating the token
    let option = { httpOnly: true, secure: true }; // options for cokkies
    return res
      .status(200)
      .cookie("Token", token, option)
      .send({ result: true, message: "user created", data: user });
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

let getuser = (req, res) => {
  res.send("ok")
};

let updateuser = (req, res) => {};

export { login, signup, getuser, updateuser };
