const mongoose=require("mongoose");


//build schema

const schema = new mongoose.Schema({




    _id:Number,
    date:Date,
    title:String,
///referance da byykon esm ell collectionand primary key

  main_speaker:{type:mongoose.Types.ObjectId, ref:"speakers"},
  speakers:[{type:mongoose.Types.ObjectId, ref:"speakers"}],
  students:[{type:Number, ref:"students"}],
 
},
    
    
);

//2-register for schema in mongoose

module.exports = mongoose.model("events",schema)