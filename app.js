require('dotenv').config()
const express = require('express')

//Routers
const couponRouter = require('./routes/coupon.router')
const cartRouter = require('./routes/cart.router')

const app = express()

app.use(express.json())

app.use('/api/v1/coupon',couponRouter)
app.use('/api/v1/cart', cartRouter)

module.exports = app