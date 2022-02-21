
const {validationResult}= require("express-validator");

const createSpraker = require('./speakerController')
const createStudent = require('./studentController')
const speaker = require('../Models/SpeakerSchema')
const jwt = require("jsonwebtoken")

const createEvent=(request,response,next)=>{

    if(request.body.role =="speaker"){
        createSpraker.createSpraker()
    }
    
    if(request.body.role =="student"){
        createStudent.createStudent()
    }

   response.status(201).json({data:"added",BODY:request.body})
   next()

}

const login = (request, response, next)=>{

 speaker.findOne({email:request.body.email})
 
        .then(data=>{
        if(!data) next(new Error ("username or password incoreect"))
        
        let token = jwt.sign({
            // email:request.body.email,
            // email:request.body.email,
            role:"speakers"
        },"ITIMearn", {expiresIn:"1h"})
        
            response.status(200).json({data, token})
        
        })
        .catch(error =>{
            next(error)
        })
	// let {email,password,role} = request.body;
	
    // if (email=='rana@gmail.com' && password == 'ranawagdi') {
    // response.status(200).json([{data:`welcome ${email}`}])
    
    
    
    
  
}






module.exports ={
    login,
    // register,
    createEvent
}