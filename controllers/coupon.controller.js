const Coupon = require('../models/coupon.model')


async function getCoupons(req,res){
    try {
        const coupons = await Coupon.find({});
        //If coupon not created
        if(!coupons){
             res.status(400).json({
                 status: "Failed",
                 msg: "Coupon not created!"
             })
        }


        res.status(200).json({
            status: "Success",
            data : {
                coupons
            }
        })
    } catch (error) {
     res.status(400).json({
         status: "Failed",
         msg: error
     })
    }
 
 }
 

async function createCoupon(req,res){
   try {
       const coupon = await Coupon.create(req.body);
       //If coupon not created
       if(!coupon){
            res.status(400).json({
                status: "Failed",
                msg: "Coupon not created!"
            })
       }
       res.status(201).json({
        status: "Success",
        data : {
            coupon
        }
    })
   } catch (error) {
    res.status(400).json({
        status: "Failed",
        msg: error
    })
   }

}

module.exports = {getCoupons, createCoupon}