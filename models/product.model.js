import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "product name is required"],
    },
    quantity: {
      type: Number,
      required: [true, "product quantity is required"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "product price is required"],
      default: 0,
    },
    Image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);



const Product = mongoose.model("Product", productSchema);
export default Product; 