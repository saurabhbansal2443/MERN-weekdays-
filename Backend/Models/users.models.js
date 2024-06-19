import mongoose from "mongoose";

const {Schema , model } = mongoose;

const userSchema = new Schema({
    userName : {type : String },
    email : {type : String , required : true , lowercase : true , unique : true },
    password : {type : String,required : true , minlength: [6 , "password is too short "]}
})

const User = model("User", userSchema);
export default  User;

