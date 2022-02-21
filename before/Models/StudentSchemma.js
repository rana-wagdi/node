const mongoose=require("mongoose");
var bcrypt   = require('bcrypt-nodejs'); 

//build schema

const schema = new mongoose.Schema({

    _id:Number,
    fullName:String,
    email:{type:String, unique:true},
    password:{type:String, required:true},
    role:String
}
    
    
);


schema.plugin(require("mongoose-bcrypt"));
//2-register for schema in mongoose

module.exports = mongoose.model("students",schema)