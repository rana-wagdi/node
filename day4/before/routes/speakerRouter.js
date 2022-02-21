// const { request, response } = require("express");
const express = require("express");
// const { body, query, param } = require("express-validator")
const router = express.Router();

const speakerController = require("../controllers/speakerController")

 isAuth = require("../Middleware/authMW")
router.route('/speaker/:id?')

    


    .get( speakerController.getAllSpeakers)


    .post(isAuth, speakerController.createSpraker)

    .put((speakerController.updateEvent))

    .delete((speakerController.deleteEvent));


module.exports = router;