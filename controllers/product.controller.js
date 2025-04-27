import Product from "../models/product.model.js";

const getProducts = async (req, res) => {
    try {
      const { page = 1, limit = 10 } = req.query;
        const products = await Product.find({})
        .skip((page - 1) * limit)
        .limit(Number(limit));
        const total = await Product.countDocuments();
        res.status(200).json(
          {total,
          page: Number(page), 
          limit: Number(limit),
          totalPages: Math.ceil(total / limit),
          data: products}
        );
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
        console.log(error);
      }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
        console.log(error);
      }
}


const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
        console.log(error);
      }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true }); //برجع نسخة البروداكت بعد ما يتحدث مش قبل التحديث
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
    console.log(error);
  }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
        console.log(error);
      }
}

 const uploadProductImage = async (req, res) => {
  try {
    const fileName = req.file.filename;
    const fullUrl = req.protocol + '://' + req.get('host');
    const imageUrl = `${fullUrl}/images/${fileName}`;

    res.status(200).json({ path: imageUrl });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadProductImage
}
