import User from "../Models/users.models.js";

import fs from "fs";
let data = JSON.parse(fs.readFileSync("/Users/saurabhbansal/Desktop/GFG batches /MERN-weekdays-/Backend/Data.json","utf-8")).users



let createUser = async (req, res) => {
  try{
    let newData = req.body;
    console.log("user Data " , )
    let newUser = new User(newData);

   let data =  await newUser.save()

   res.send(data);
  }catch(err){
    res.send({result : false , error : err.message})
  }
  }
  
  let allUserData = async (req, res) => {
    let data = await User.find({});
    res.send(data)
  }
  
  let getOneUser = async (req, res) => {
    // let id = req.params.id;
    // let data = await User.findById(id);
    let {email} = req.body;
    let data = await User.findOne({email :email});
    res.send(data)
  }
  
  let replaceUser = (req, res) => {
    let id = req.params.id;
    let dataIdx = data.findIndex(obj=> obj.id==id);
    data.splice(dataIdx, 1,{...req.body , id : id });
    res.send(req.body)
  }
  
  let updateUser = (req, res) => {
    let id = req.params.id;
    let dataIdx = data.findIndex(obj=> obj.id==id);
     data.splice(dataIdx,1,{...data[dataIdx] , ...req.body})
    // let prevObj = data[dataIdx]
    // data[dataIdx] = {...prevObj , ...req.body}
    res.send(data[dataIdx])
  }
  
  let deleteUser = (req, res) => {
    let id = req.params.id;
    let dataIdx = data.findIndex(obj=> obj.id==id);
    let prevObj = data[dataIdx]
    data.splice(dataIdx , 1)
    res.send(prevObj)
  
  }


  export {createUser , updateUser , deleteUser , getOneUser , replaceUser ,allUserData}