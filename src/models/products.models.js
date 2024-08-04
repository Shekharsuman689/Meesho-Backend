import mongoose from "mongoose";
//Product Schema 
const productSchema = new mongoose.Schema(
    {
        title : {type: String, required: true},
        image : {type: String, required: true},
        price: {type: Number, required: false},
        description : {type: String, required: true},
        category : {type: String, required: true},
        rating : {type: Number, required: false},
        userId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    },
    {
        versionKey: false,
        timestamps: true
    }

    
)

const Product = mongoose.model("Product", productSchema);
export default Product