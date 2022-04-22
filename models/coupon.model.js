const mongoose = require('mongoose')

const couponSchema = new mongoose.Schema({
    coupon:{
        type: String,
        required: [true, "Please define coupon code."]
    },
    couponType: {
        type: String,
        enum: {
            values: ["flat", "percent"],
            message: '{Value} is not supported'
        },
        default: "flat"
    },
    minAmount: {
        type: Number,
        required: [true, "Minimum total cart value need to be defined"]
    },
    discount:{
        type: Number,
        required: [true, "Please give discount value"]
    },
    maxDiscount:{
        type: Number,
        required:[true, "Maximum discount need to be defined!! "]
    },
    startDate:{
        type: Date,
        required: [true, "Start date of coupon not specified"],
    },
    endDate: {
        type: Date,
        required: [true, "End date of coupon not specified"]
    },

})

module.exports = mongoose.model('Coupon', couponSchema)