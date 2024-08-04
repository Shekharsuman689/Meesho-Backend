import express from "express"
import { createCart, deleteCart, getAllCart, getCart } from "../controllers/cart.controller.js";
import { authentication } from "../middlewares/user.middlewares.js";

const cartRouter = express.Router();
cartRouter.post("/:id", authentication, createCart);
cartRouter.get("/details",authentication, getAllCart);
cartRouter.get("/:id", getCart);
cartRouter.delete("/:id", deleteCart);

export default cartRouter;