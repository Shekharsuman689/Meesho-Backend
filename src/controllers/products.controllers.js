import Product from "../models/products.models.js"

//get all product controller
const getAllProducts = async(req, res) =>{
    try {
        const product = await Product.find({});
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({
            message: "Error in getting all products",
            error : error.message
        })
    }
}
//create product controller
const createProduct = async (req, res) => {
//    const {title, image, price, description, category, rating } = req.body
    try {
        console.log(req.body)
        const product = await Product.create(req.body);

        return res.status(201).send({message : "Product created successfully"})
    } catch (error) {
        return res.status(500).send({message : "Error in getting product", error : error.message})
    }
}

//get product by id controller
const getProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const product = await Product.findById(id);
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({
            message : "Error in getting product",
            error : error.message
        })
    }
}

//Update product by id controller
const updateProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const product = await Product.findByIdAndUpdate(id, req.body, {new:true});
        return res.status(200).send({message : "Product updated successfully"})
    }
    catch(error) {
        return res.status(500).send({
            message : "Error in updating product",
            error : error.message
        })
    }
}

//delete product controller
const deleteProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        return res.status(200).send({message : "Product deleted successfully"})
    } catch (error) {
        return res.status(500).send({
            message : "Error in deleting product",
            error : error.message
        })
    }
}
export {
    getAllProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
}