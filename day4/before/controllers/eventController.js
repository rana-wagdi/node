// const { request } = require("express");
const { validationResult } = require("express-validator");
// const req = require("express/lib/request");
const eventusers = require('../Models/EventsSchema');

const getAllEvents = (request, response, next) => {
    eventusers.find({})
        .then(data =>{
            response.status(200).json(data)
        })

        .catch(error=>{
           next(error)
        })
    // response.status(200).json(data)
}


const geteventsId = (request, response) => {


    if (request.params.id) {
        eventusers.findById({ _id: request.params.id })
             .then(data => {
 
                 response.status(200).json(data)
             })
             .catch(error => {
                 next(error)
             })
 
 
 
     } else {
        eventusers.find({})
         .then(data =>{
             response.status(200).json(data)
         })
 
         .catch(error=>{
            next(error)
         })
 
     }
    // const speakers= request.params.id;
    // if (request.body.id) {
    //    user.findById({ _id: request.body.id })
    //         .then(data => {

    //             response.status(200).json(data)
    //         })
    //         .catch(error => {
    //             next(error)
    //         })



    // } else {
    //    user.find({})
    //     .then(data => {
    //         response.s

    //     })

    // }
    // response.status(200).json([{ data: "List of events" }])
}




const createEvent = (request, response, next) => {

    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;

        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")

        throw error;

    }

    let object = new Eventss ({

        _id:request.body.id,
        name:request.body.name,
        email:request.body.email,
        password:request.body.password,
        image:request.body.image,
        address:request.body.address,
        role:request.body.role
})

object.save()
      .then(data=>{
        response.status(201).json({ data: "added", BODY: request.body })
        next()    
      
      })

  
}



const updateEvent = (request, response) => {
    response.status(200).json({ data: "updated" })

}

const deleteEvent = (request, response) => {

    response.status(200).json({ data: "deleted", id: request.params })

}





module.exports = {

    getAllEvents,
    updateEvent,
    createEvent,
    deleteEvent,
    geteventsId
}