// here we are doing validation 
// for that weare installing express-validator

const express = require("express");
const {body,validationResult}=require("express-validator")
const User = require("../model/user.model");
const router = express.Router();

router.post("/",
    // body("id").isLength({min:1}).withMessage("id is required"),
    body("first_name").isLength({min:1}),
    body("last_name").isLength({min:1}),
    body("email").isEmail(),
    body("gender").custom((value)=>{
        if(value==="male"||value==="female"||value==="other"){
            return true;
        }
        throw new Error("gender should be male or female or other")
    }), //equal check
    body("age").isLength({min:1,max:3}).custom((value)=>{
        // value= +value
        if(value>=1 && value<=100){
            return true;
        }
        throw new Error("age should be between 1 to 100")
    }),
    body('pincode').isLength({min:6,max:6}).withMessage("it should have 6 digits"),
    async(req,res)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(404).json({data:errors.array()})
        }

    const user=await User.create(req.body);
    res.status(201).json({data:user})
})

module.exports=router;