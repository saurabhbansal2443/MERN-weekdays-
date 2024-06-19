import mongoose from "mongoose";


let dbConnection = async ()=>{
try{
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("DB connected ")
}catch(err){
  console.log(err)
}
}

export default dbConnection;