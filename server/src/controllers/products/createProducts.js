const { Products } = require("../../db");

const createProducts = async (req, res) => {
  try {
    const { name, description, image_url, price } = req.body;

    const newProduct = await Products.create({
      name,
      description,
      image_url,
      price,
    });

    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({ msg: "Error al crear el producto" });
  }
};

module.exports = createProducts;
