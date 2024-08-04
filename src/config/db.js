import mongoose from "mongoose";

//Connecting mongoDB
const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to DB");
    } catch (error) {
        console.log("Error connecting to DB", error)
    }
}

export default connectDB;