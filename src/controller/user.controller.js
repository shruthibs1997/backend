// CRID operations are written here

const express = require("express");

const User = require("../model/user.model");

const router = express.Router();

const sendmail = require("../utils/send-mail")

router.post("/",async(req,res)=>{
    try{
        const user = await User.create(req.body);

        //sending email logic 
        // for this we need to install nodemailer
        
        await sendmail({
            to: user.email, // list of receivers
            subject: `Welcome to ABC system ${user.first_name} ${user.last_name}`, // Subject line
            text: `Hi ${user.first_name}, Please confirm your email address`, // plain text body
            html: "<b>verified</b>", // html body
        });
        await sendmail({
            to: "shruthi@gmail , swanand@gmail,sandeep@gmail,rashmi@gmail,teju@gmail", // list of receivers
            subject: `${user.first_name} ${user.last_name} has registered with us`, // Subject line
            text: `Please welcome ${user.first_name} ${user.last_name}`, // plain text body
            html: "<b>verified</b>", // html body
        });
        

        return res.status(201).json({user:user});
    }catch(err){
        return res.status(404).json({status:"failed",message:err})
    }
    
})

router.get("/",async(req,res)=>{
    try{
        const page = +req.query.page || 1;
        const size = +req.query.size ||10;

        // if page 1 => 1 to 10
        // if page 2 => 11 to 20
        // front end person will ask for no of pages also so we sd give pages in response
        const offset = (page-1)* size;


        const user = await User.find().skip(offset).limit(size).lean().exec();

        const totalPages= Math.ceil((await User.find().countDocuments())/size)

        return res.status(200).json({user:user,totalPages:totalPages});
    }catch(err){
        return res.status(404).json({status:"failed",message:err})
    }
    
})

module.exports=router;