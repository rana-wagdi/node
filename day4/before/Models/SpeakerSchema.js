const mongoose=require("mongoose");
// var bcrypt = require('bcrypt');
var bcrypt   = require('bcrypt-nodejs'); 

//build schema

const schema = new mongoose.Schema({




    _id:Number,

    // name:{type:String, required:true},
    
    name:String,

    
    email:{type:String, unique:true},
    

    
    // password:{type:String, required:true},
  
    image:String,
    role: {type: String , enum: ["student", "speakers"]},
    address:{
        city:String,
        street:Number,
        building:Number
        },
   
},
    

);
schema.pre('save', function(next) {
    var user = this;
    bcrypt.hash(user.password, null, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
       next();
  });
    next();
  });
  
  schema.methods.comparePassword = function(password) {
      return bcrypt.compareSync(password, this.password); 
  };

// schema.plugin(require('mongoose-bcrypt'));  

//2-register for schema in mongoose

module.exports = mongoose.model("speaker",schema)