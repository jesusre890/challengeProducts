const { Products } = require("../../db");

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, description, image_url, price } = req.body;

    const product = await Products.findByPk(productId);

    if (!product) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }

    if (name) {
      if (typeof name !== "string") {
        return res
          .status(400)
          .json({ msg: "Name solo puede ser de tipo string" });
      }
      product.name = name;
    }

    if (description) {
      if (typeof description !== "string") {
        return res
          .status(400)
          .json({ msg: "Description solo puede ser de tipo string" });
      }
      product.description = description;
    }

    if (image_url) {
      if (typeof image_url !== "string") {
        return res
          .status(400)
          .json({ msg: "image_url solo puede ser de tipo string" });
      }
      product.image_url = image_url;
    }

    if (price) {
      if (typeof price !== "number") {
        return res
          .status(400)
          .json({ msg: "Price solo puede ser de tipo number" });
      }
      product.price = price;
    }

    await product.save();

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ msg: "Error al actualizar el producto" });
  }
};

module.exports = updateProduct;
