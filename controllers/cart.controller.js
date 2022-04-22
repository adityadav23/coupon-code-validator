const Coupon = require('../models/coupon.model')

function validateCoupon(coupon){
    //check if coupon code expired
     return (coupon.startDate< Date.now() && coupon.endDate > Date.now())
}

async function checkoutCart(req,res){
    const {totalAmount, couponCode} = req.body
    let discountedPrice = 0;
    let discountAmount = 0 ;
    const coupon = await Coupon.findOne({coupon:couponCode})
    if(!coupon){
        return res.status(400).json({
            status:"failed",
            data:{
                msg: "Coupon not found!!"
            }
        })
    }

    const isValid = validateCoupon(coupon)
    if(!isValid){
        return res.status(400).json({
            status:"failed",
            data:{
                msg: "Coupon expired!!"
            }
        })
    }

    //check minimum cart value
    if(coupon.minAmount <= totalAmount){
        if(coupon.couponType == "flat"){
            discountAmount = coupon.discount
            discountedPrice = totalAmount - discountAmount
        }else{
             discountAmount = coupon.discount*totalAmount*0.01
            if(discountAmount>coupon.maxDiscount) {
                discountAmount = coupon.maxDiscount
            }
            discountedPrice = totalAmount - discountAmount
            
        }
    }else{
        return res.status(400).json({
            status: "failed",
            msg: "Cart value is less than minimum amount"
        })
    
    }

    return res.status(200).json({
        status: "success",
        data: {
            discountAmount,
            discountedPrice

        }
    })
}

module.exports = {
    checkoutCart
}