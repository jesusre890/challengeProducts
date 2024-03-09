const { where } = require("sequelize");
const { Products } = require("../../db");

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll({
      where: { delete: false },
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener los productos" });
  }
};

module.exports = getAllProducts;
