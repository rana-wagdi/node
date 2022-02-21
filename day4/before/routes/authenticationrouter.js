const express = require('express')
const router = express.Router()
const { member } = require('../data')
const {body,query,param}=require("express-validator")
const controller=require("../controllers/controller")



router.post("/login",(controller.login))


  


router.post('/register', [
  body("name").isAlpha().withMessage(" Name should be String"),
  body("email").isEmail().withMessage("should be email"),
  body("image").isString().withMessage("should be String"),
  body('password').isLength({ min: 5 }),
  
    body('role').optional().isIn(['speaker', 'student'])
  
], controller.createEvent)




module.exports = router