import express from "express";
import auth from "../middlewares/auth.middleware.js";
import {
  login,
  signup,
  getuser,
  updateuser,
} from "../controller/user.controller.js";

let Router = express.Router();

Router.post("/signup", signup)
  .post("/login", login)
  .get("/getuser",auth ,  getuser)
  .patch("/update", updateuser);

  export default Router;
