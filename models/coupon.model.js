const mongoose = require('mongoose')

const couponSchema = new mongoose.Schema({
    couponType: {
        type: String,
        default: "flat"
    },
    minAmount: {
        type: Number,
        required: [true, "Minimum total cart value need to be defined"]
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