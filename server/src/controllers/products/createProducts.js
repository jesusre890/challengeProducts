const { Products } = require("../../db");

const createdProducts = async (req, res, next) => {
  try {
    const { name, description, image_url, price } = req.body;

    // Crear el producto en la base de datos usando el modelo Products
    const newProduct = await Products.create({
      name,
      description,
      image_url,
      price,
    });

    res.status(201).json(newProduct); // Devuelve el nuevo producto creado
  } catch (error) {
    next(error); // Pasa el error al siguiente middleware de manejo de errores
  }
};

module.exports = createdProducts;
