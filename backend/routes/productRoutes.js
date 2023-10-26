import express from "express";
const router = express.Router();
import Product from "../models/productModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({}).exec();
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);

    if (product) {
      return res.json(product);
    }

    return res.status(404).json({ message: "Product not found" });
  })
);

export default router;
