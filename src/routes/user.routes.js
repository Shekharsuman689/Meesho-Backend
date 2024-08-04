import express from "express";
import { deleteUser, login, logout, register } from "../controllers/user.controllers.js";
import { authentication } from "../middlewares/user.middlewares.js";

const userRouter = express.Router();

userRouter.post("/register", register);//Register Route
userRouter.post("/login", login); //Login Route
userRouter.post("/logout", logout); //Logout Route
userRouter.delete("/:id",authentication, deleteUser); //Delete Route

export default userRouter;