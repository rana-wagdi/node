
// const { validationResult } = require("express-validator");
const speakers = require('../Models/SpeakerSchema');
const bcrypt = require('bcryptjs')




const getAllEvents = (request, response, next) => {


    speakers.find({})
        .then(data =>{
            response.status(200).json(data)
        })

        .catch(error=>{
           next(error)
        })
   
}


const getAllSpeakers = (request, response,next) => {
       
    if (request.params.id) {
       speakers.findById({ _id: request.params.id })
            .then(data => {

                response.status(200).json(data)
            })
            .catch(error => {
                next(error)
            })



    } else {
        speakers.find({})
        .then(data =>{
            response.status(200).json(data)
        })

        .catch(error=>{
           next(error)
        })

    }
}




const createSpraker = (request, response, next) => {

    let object = new speakers({

        _id:request.body.id,
        name:request.body.name,
        email:request.body.email,
        // password:request.body.password,
        image:request.file.filename,
        address:request.body.address,
        role:request.body.role
        
})


    object.save()
      .then(data=>{
        response.status(201).json({ message: "added", data})  
      
      })
      .catch(error=>next(error))

  
}

const updateEvent = (request, response) => {
    response.status(200).json({ data: "updated" })

}

const deleteEvent = (request, response) => {

    
        let data =  speakers.findByIdAndDelete(request.body.id)
        
        if(data == null) throw new Error("Departmrnt Is not Found")
        
        response.status(200).json({message:"deleted"})
    
    
{
next(error)
}
}





module.exports = {

    getAllSpeakers,
    updateEvent,
    createSpraker,
    deleteEvent,
    getSpeakerId
}