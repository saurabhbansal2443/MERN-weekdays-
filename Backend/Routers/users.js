import express from "express";

import {
    createUser,
    getOneUser,
    allUserData,
    updateUser,
    deleteUser,
    replaceUser,
    loginUser,
    signupUser
  }from "./../Controllers/user.js"

  let Router = express.Router();

Router.post("/", createUser)
.get("/", allUserData)
.get("/:id", getOneUser)
.put("/", replaceUser)
.patch("/", updateUser)
.delete("/:id", deleteUser)
.post("/login" , loginUser )
.post("/signup" , signupUser )

export default Router;