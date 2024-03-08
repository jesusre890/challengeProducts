const { Router } = require("express");
const createdProducts=require("../../controllers/products/createProducts");
const productsRouter=Router();

productsRouter.post("/", createdProducts);

module.exports = productsRouter