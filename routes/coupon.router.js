const express = require('express')
const {getCoupons,createCoupon} = require('../controllers/coupon.controller')

const router = express.Router()

router.route('/').get(getCoupons).post(createCoupon)

module.exports = router