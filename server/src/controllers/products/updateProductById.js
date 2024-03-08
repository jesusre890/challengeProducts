const { Products } = require("../../db");

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id; // Optengo el producto por ID
    const { name, description, image_url, price } = req.body;

    // Busco el producto en BD
    const product = await Products.findByPk(productId);

    if (!product) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }

    // update
    product.name = name;
    product.description = description;
    product.image_url = image_url;
    product.price = price;

    // conservo cambios
    await product.save();

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: "Error al actualizar el producto" });
  }
};

module.exports=updateProduct;
