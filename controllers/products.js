const ProductModel = require('../models/products')
const jwt = require('jsonwebtoken')

const addProduct = async(req,res) =>{
    const newProduct = await ProductModel.create(req.body)
    const payload = jwt.decode(req.headers.authorization)
    console.log(payload)
    return res.json({
        success: true,
        message:"Dummy product added successfully"
    })
}

const getProducts = async(req,res) =>{
    return res.json({
        success: true,
        message:"Dummy product list"
    })
}

const controllers = {addProduct, getProducts}
module.exports = controllers