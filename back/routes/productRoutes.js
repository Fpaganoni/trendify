import express from "express";
import Product from "../models/productModel.js";

const router = express.Router();

// @desc    Obtener todos los productos
// @route   GET /api/products
// @access  Public
router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

export default router;
