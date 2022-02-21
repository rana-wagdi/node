const mongoose=require("mongoose");


//build schema

const schema = new mongoose.Schema({




    _id:Number,

    // name:{type:String, required:true},
    
    fullName:String,

    
    email:{type:String, unique:true},


    
    password:Number,
    role:String
}
    
    
);

//2-register for schema in mongoose

module.exports = mongoose.model("students",schema)