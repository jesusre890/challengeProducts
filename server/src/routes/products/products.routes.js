const { Router } = require("express");
const createdProducts = require("../../controllers/products/createProducts");
const getProductById = require("../../controllers/products/getProductsById");
const getAllProducts = require("../../controllers/products/getAllProducts");
const updateProduct = require("../../controllers/products/updateProductById");
const deleteProduct = require("../../controllers/products/deleteProduct");
const getProductsActive=require("../../controllers/products/getProductsActive");
const productsRouter = Router();

productsRouter.post("/", createdProducts);
productsRouter.get("/:id", getProductById);
productsRouter.get("/",getAllProducts);
productsRouter.get("/active", getProductsActive)
productsRouter.put("/:id", updateProduct);
productsRouter.delete("/:id", deleteProduct);

module.exports = productsRouter;
