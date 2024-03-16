
const express = require('express')
const router = express.Router();
const userController = require('../controllers/user')

router.post("/registration",userController.userRegistration)
router.post("/login",userController.userLogin)
router.post("/logout",userController.userLogout)

module.exports = router;