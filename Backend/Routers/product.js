import express from "express";

import {
    createProduct,
    getOneProduct,
    allProductData,
    updateProduct,
    deleteProduct,
    replaceProduct,
  }from "./../Controllers/product.js"

  let Router = express.Router();

Router.post("/", createProduct)
.get("/", allProductData)
.get("/:id", getOneProduct)
.put("/:id", replaceProduct)
.patch("/:id", updateProduct)
.delete("/:id", deleteProduct)

export default Router;
