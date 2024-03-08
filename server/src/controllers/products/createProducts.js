const { Products } = require("../../db");

const createdProducts = async (req, res) => {
  try {
    const { name, description, image_url, price } = req.body;

    // Creo el producto en BD
    const newProduct = await Products.create({
      name,
      description,
      image_url,
      price,
    });

    res.status(200).json(newProduct); // Devuelve producto creado
  } catch (error) {
    res.status(500).json({ msg: "Error al crear el producto" });
  }
};

module.exports = createdProducts;
