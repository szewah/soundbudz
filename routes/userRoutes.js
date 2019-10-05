var db = require('../models/');
var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

//Registering new user
router.post('/new', userController.create);

//Login


// find all users
router.get('/all', userController.findAll);

module.exports = router;
