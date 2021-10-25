// 1 schema
// 2 creating the model

const mongoose=require("mongoose");

// schema

const userSchema = new mongoose.Schema({
    first_name :{type:String,required:true},
    last_name:{type:String},
    email:{type:String,required:true,unique:true},
    age:{type:Number,required:true},
    mobile:{type:String}
},{
    versionKey:false,
    timestamps:true
});

// create model

const User = mongoose.model("user",userSchema);

// export model

module.exports=User; 