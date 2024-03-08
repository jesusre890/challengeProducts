const { Products } = require("../../db");

const getProductsActive = async (req, res) => {
  try {
    // Obtengo productos no eliminados
    const products = await Products.findAll({
      where: {
        delete: false,
      },
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener los productos" });
  }
};

module.exports = getProductsActive;
