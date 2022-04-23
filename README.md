# coupon-code-validator

  After starting the server the app will run on port 3000.

# Setup
 To run application:
 =>Download the application
 => npm install
 => Create a file ".env" => Add Atlas Mongo Db connection link as [MONGO_URI] 
                         => npm start 
 
 
 # POST Route to create coupon codes
 
 http://localhost:3000/api/v1/coupon
  
  => In the request body add =>
      { coupon[Coupon code],
        couponType[flat, percent],
        minAmount [For minimum total cart Value],
        discount [It gives the percentage if coupon Type is percent and real discount if coupon type is flat],
        maxDiscount [MAximum discount available on a coupon ],
        startDate [start date for coupon],
        endDate [end date for coupon]
        }
                                    
 
 # Get route to display all coupon codes

    http://localhost:3000/api/v1/coupon


# POST route to get CART VALUE AFTER USING COUPON 
 
 http://localhost:3000/api/v1/cart
 
  In the request body add =>
  { totalAmount[total Cart value],
    couponCode[The coupon code which you want to apply
   }
