const express = require("express");
// const { body, query, param } = require("express-validator")
const router = express.Router();

const eventController = require("../controllers/eventController")


router.route('/event/:id?')

    .get((eventController.geteventsId))


    .post((eventController.createEvent))

    .put((eventController.updateEvent))

    .delete((eventController.deleteEvent));


module.exports = router;