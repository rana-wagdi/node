// const { request, response } = require("express");
const express = require("express");
const { body, query, param } = require("express-validator")
const router = express.Router();

const studentController = require("../controllers/studentController")


router.route('/student/:id?')

    .get((studentController.getAlldstudent))


    .get((studentController.getstudentId))


    .post((studentController.createStudent))

    .put((studentController.updateEvent))

    .delete((studentController.deleteEvent));


module.exports = router;