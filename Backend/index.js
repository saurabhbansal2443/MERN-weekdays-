import fs from "fs";
let htmlFile = fs.readFileSync("./index.html", "UTF-8");
let data = JSON.parse(fs.readFileSync("./Data.json", "UTF-8")).products;

import express from "express";

const server = express();

server.use(express.json());

// Rest API

// Create 

server.post("/products", (req, res) => {
  let newData = req.body;
  data.push(newData);
  res.send(newData)
})

// Read 
server.get("/products",(req, res) => {
  res.json(data);
})

server.get("/products/:id" , (req, res) => {
  let id = req.params.id;
  let productData = data.find(obj=>obj.id==id);
  res.json(productData);
})






server.listen(8080, () => {
  console.log(`Sever is running `);
});
