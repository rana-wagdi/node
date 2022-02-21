const mongoose=require("mongoose");


//build schema

const schema = new mongoose.Schema({




    _id:Number,

    // name:{type:String, required:true},
    
    date:Date,
    title:String,
    

   
},
    
    
);

//2-register for schema in mongoose

module.exports = mongoose.model("events",schema)