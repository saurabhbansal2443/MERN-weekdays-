import express from "express";
import productRouter from "./Routers/product.js"
import userRouter from "./Routers/users.js"
import 'dotenv/config'
import dbConnection from "./DB.js";

const server = express();
server.use(express.json());

server.use("/products" , productRouter)
server.use("/users" , userRouter)

dbConnection().then(()=>{
  server.listen(process.env.PORT || 8080, () => {
    console.log(`Sever is running `);
  });
})





