import fs from "fs";
let data = JSON.parse(fs.readFileSync("/Users/saurabhbansal/Desktop/GFG batches /MERN-weekdays-/Backend/Data.json","utf-8")).products

let createProduct = (req, res) => {
    let newData = req.body;
    data.push(newData);
    res.send(newData)
  }
  
  let allProductData = (req, res) => {
    res.json(data);
  }
  
  let getOneProduct = (req, res) => {
    let id = req.params.id;
    let productData = data.find(obj=>obj.id==id);
    res.json(productData);
  }
  
  let replaceProduct = (req, res) => {
    let id = req.params.id;
    let dataIdx = data.findIndex(obj=> obj.id==id);
    data.splice(dataIdx, 1,{...req.body , id : id });
    res.send(req.body)
  }
  
  let updateProduct = (req, res) => {
    let id = req.params.id;
    let dataIdx = data.findIndex(obj=> obj.id==id);
     data.splice(dataIdx,1,{...data[dataIdx] , ...req.body})
    // let prevObj = data[dataIdx]
    // data[dataIdx] = {...prevObj , ...req.body}
    res.send(data[dataIdx])
  }
  
  let deleteProduct = (req, res) => {
    let id = req.params.id;
    let dataIdx = data.findIndex(obj=> obj.id==id);
    let prevObj = data[dataIdx]
    data.splice(dataIdx , 1)
    res.send(prevObj)
  
  }


  export {createProduct , getOneProduct , allProductData , updateProduct , deleteProduct , replaceProduct }