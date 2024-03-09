const { Products } = require("../../db");

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Products.findByPk(productId);

    if (!product) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener el producto" });
  }
};

module.exports = getProductById;
