import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/user.routes.js";
import productRouter from "./src/routes/products.routes.js";
import cookieParser from "cookie-parser";
import cartRouter from "./src/routes/cart.routes.js";

dotenv.config();
const app = express();

//Middlewares
app.use(express.json());
 app.use(cors());
// app.use(cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true
// }));

app.use(cookieParser())

//Routes

app.use("/api/user", userRouter);//User Route
app.use("/api/product", productRouter);//Product Route
app.use("/api/cart", cartRouter);
//Home Route
app.get("/", (req, res)=>{
    res.status(200).send("welcome to the home page")
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    connectDB();
    console.log(`server is listening on port ${PORT}`);
})





