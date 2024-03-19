const express = require('express')
const router = express.Router();
const productController = require('../controllers/products')
const auth = require('../middlewares/auth')

router.post('/',auth,productController.addProduct)
router.patch('/',auth,productController.editProducts)
router.get('/',productController.getProducts)

module.exports = router