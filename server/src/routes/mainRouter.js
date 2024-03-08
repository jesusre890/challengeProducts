const { Router } = require("express");
const productsRouter=require("./products/products.routes");

const mainRouter=Router();

mainRouter.use("/products", productsRouter);

module.exports = mainRouter;