const express = require('express')
const router = express.Router();
const productController = require('../controllers/products')

router.post('/',productController.addProduct)
router.get('/',productController.getProducts)

module.exports = router