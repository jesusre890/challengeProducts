const { Products } = require("../../db");

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id; // Obtengo el ID

    // Busco el producto BD
    const product = await Products.findByPk(productId);

    if (!product) {
      // Si no se encuentra, devuelve un error
      return res.status(404).json({ msg: "Producto no encontrado" });
    }

    res.status(200).json(product); // Devuelve el producto
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener el producto" });
  }
};


module.exports = getProductById