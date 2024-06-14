import express from "express";
import productRouter from "./Routers/product.js"
import userRouter from "./Routers/users.js"

const server = express();
server.use(express.json());

server.use("/products" , productRouter)
server.use("/users" , userRouter)

server.listen(8080, () => {
  console.log(`Sever is running `);
});
