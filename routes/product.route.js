import express from "express";
import Product from "../models/product.model.js";
const router = express.Router();
import { getProducts, getProductById ,createProduct, updateProduct, deleteProduct, uploadProductImage  } from "../controllers/product.controller.js";
import upload from "../middlewares/upload.js";


router.get("/", getProducts);
router.get("/:id", getProductById)
router.post("/", createProduct);       
router.put("/:id", updateProduct);   
router.delete("/:id", deleteProduct);
router.post('/upload-image/:id', upload.single('image'), uploadProductImage);



export default router;