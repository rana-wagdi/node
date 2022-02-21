
// const { request } = require("express");
const { validationResult } = require("express-validator");
const studentes = require('../Models/StudentSchemma');

const getAlldstudent = (request, response, next) => {
    studentes.find({})
        .then(data =>{
            response.status(200).json(data)
        })

        .catch(error=>{
           next(error)
        })
}

const getstudentId = (request, response) => {
    // const speakers= request.params.id;
    if (request.body.id) {
        studentes.findById({ _id: request.body.id })
            .then(data => {

                response.status(200).json(data)
            })
            .catch(error => {
                next(error)
            })



    } else {
       user.find({})
        .then(data => {
            response.s

        })

    }
}




const createStudent = (request, response, next) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;

        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")

        throw error;

    }
    



    let object = new studentes({

        _id:request.body.id,
        fullName:request.body.fullName,
        email:request.body.email,
        password:request.body.password,
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

    response.status(200).json({ data: "deleted", id: request.params })

}





module.exports = {

    getAlldstudent,
    updateEvent,
    createStudent,
    deleteEvent,
    getstudentId
}