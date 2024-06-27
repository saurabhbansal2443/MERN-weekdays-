import express from "express";
import 'dotenv/config'
import dbConnect from "./db/index.db.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js"

let server = express();

let port = process.env.PORT || 8000;

server.use(express.json()); // This is to read the body of req 
server.use(express.urlencoded({ extended: true }))
server.use(cookieParser()); // This is used to read the cookies 

server.use("/users" , userRouter);  // always place the router after the middlewares 



dbConnect().then(()=>{
    server.listen(port , ()=>{
        console.log("Server is connected at port " , port)
    })
}).catch((err)=>{
    console.log(err)
})


