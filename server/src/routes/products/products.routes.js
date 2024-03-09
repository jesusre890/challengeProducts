const { Router } = require("express");
const createProducts = require("../../controllers/products/createProducts");
const getProductById = require("../../controllers/products/getProductsById");
const getAllProducts = require("../../controllers/products/getAllProducts");
const updateProduct = require("../../controllers/products/updateProductById");
const deleteProduct = require("../../controllers/products/deleteProduct");
const productsRouter = Router();

productsRouter.post("/", createProducts);
productsRouter.get("/:id", getProductById);
productsRouter.get("/", getAllProducts);
productsRouter.put("/:id", updateProduct);
productsRouter.delete("/:id", deleteProduct);

module.exports = productsRouter;
