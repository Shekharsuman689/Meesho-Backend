import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/products.controllers.js";


const  productRouter = express.Router();

productRouter.get("/details", getAllProducts); //Get all Product Details Route
productRouter.get("/:id", getProduct); //Get Product by is Route
productRouter.post("/create", createProduct);//Create Product Route
productRouter.patch("/:id", updateProduct);//Update product by id Route
productRouter.delete("/:id", deleteProduct);//Delete product by id Route

export default productRouter;