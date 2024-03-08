const { Products } = require("../../db");

const getAllProducts = async (req, res) => {
  try {
    // Obtengo todos los productos de BD
    const products = await Products.findAll();

    res.status(200).json(products); // Devuelvo los productos
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener los productos" });
  }
};

module.exports = getAllProducts