import Cart from "../models/cart.models.js";

//Get all Product in cart
const getAllCart = async (req, res) => {
    try {
        const cart = await Cart.find({userId : req.user._id}).populate({path : 'userId', select:['name']}).populate('products');
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send({message : "Error in getting cart", error : error.message})
    }
}

const getCart = async (req, res) => {
    const {id} = req.params;
    try {
        const cart = await Cart.findById(id);
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send({message : "Error in getting cart", error : error.message})
    }
}
//Create Product Cart
const createCart = async (req, res) => {
    try {
        const allCart = await Cart.find({userId : req.user._id}); 
        if (allCart.length > 0) {
            if (allCart[0].products.includes(req.params.id)) {
                return res.status(400).send({message : "You have already added  this product to cart"});
            }
            allCart[0].products.push(req.params.id);
            await allCart[0].save();
        }
        else {
            await Cart.create({
                userId : req.user._id,
                products : [req.params.id],
            });
        }
        return res.status(201).send({message : "Cart created successfully"})
    } catch (error) {
        return res.status(500).send({message : "Error in getting Cart", error : error.message})
    }
}
//Delete Cart 
const deleteCart = async (req, res) => {
    const {id} = req.params;
    try {
        const cart = await Cart.findByIdAndDelete(id);
        return res.status(200).send({message : "Cart deleted successfully"});
    } catch (error) {
        return res.status(500).send({message : "Error in getting Cart", error : error.message})
    }
}

export{
    getAllCart,
    getCart,
    createCart,
    deleteCart
}