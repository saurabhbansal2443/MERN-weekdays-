import express from "express";

import {
    createUser,
    getOneUser,
    allUserData,
    updateUser,
    deleteUser,
    replaceUser,
  }from "./../Controllers/user.js"

  let Router = express.Router();

Router.post("/", createUser)
.get("/", allUserData)
.get("/:id", getOneUser)
.put("/:id", replaceUser)
.patch("/:id", updateUser)
.delete("/:id", deleteUser)

export default Router;