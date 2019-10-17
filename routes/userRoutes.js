//This is where the json web token is created
var db = require('../models/');
var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var bcrypt = require('bcryptjs');
var jwToken = require('jsonwebtoken');
var keys = require('../config/jwtSecret');


//Registering new user
router.post('/new', (req, res) => {
    db.User.findOne({where:{email:req.body.email}})
    .then(user => {
        if(user) {
            res.status(400).json({email: "Email is already in use"});
        }
        else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    db.User.create({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: hash
                    })
                    .then(user => res.json(user))
                    .catch(err => res.status(400).json({error: "There was an error"}));
                })
            })
        }
    })
})

//Login
router.post('/login', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    db.User.findOne({where: {email}})
    .then(user => {
        if(!user) {
            return res.status(404).json({message: "Email was not found"});
        }
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            console.log("Testing isMatch " + isMatch);
            if(isMatch) {
                var payLoad = {
                    id: user.id,
                    name: user.firstName
                };
                console.log("Testing payload " + payLoad.id);
                //tokem creation
                jwToken.sign(payLoad, keys.secretOrKey, {expiresIn: '1h'},
                (err,token) => {
                    console.log("token is " + token);
                    if (err) res.status(500).json({message: "Error signing token", raw: err});
                    res.json({
                        success: true,
                        token: `Bearer ${token}`
                    })
                });
            } else {
                res.status(400).json({message: "Password isn't found"})
            }
        });
    });
});

// Find all users
router.get('/all', userController.findAll);

//Find one user
router.get('/oneUser', userController.findById);

module.exports = router;
