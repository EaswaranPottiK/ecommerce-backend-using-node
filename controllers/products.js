const ProductModel = require('../models/products')
const jwt = require('jsonwebtoken')

const addProduct = async(req,res) =>{
    const newProduct = await ProductModel.create(req.body)

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

const editProducts = async(req,res) =>{
    return res.json({
        success: true,
        message:"Dummy: Product list edited successfully"
    })
}

const controllers = {addProduct, getProducts,editProducts}
module.exports = controllers