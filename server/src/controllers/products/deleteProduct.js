const { Products } = require("../../db");

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Products.findByPk(productId);

    if (!product) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }

    // pasa a estar el estado en eliminado
    product.delete = true;

    await product.save();

    res.status(200).json({ msg: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar el producto" });
  }
};

module.exports = deleteProduct