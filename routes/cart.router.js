const express = require('express')
const {checkoutCart} = require('../controllers/cart.controller')

const router = express.Router()

router.route('/').post(checkoutCart)

module.exports = router