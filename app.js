require('dotenv').config()
const express = require('express')
const couponRouter = require('./routes/coupon.router')

const app = express()

app.use(express.json())

app.use('/api/v1/coupon',couponRouter)

module.exports = app