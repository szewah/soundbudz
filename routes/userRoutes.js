var db = require('../models/');
var express = require('express');
var route = express.Router();

//Registering new user
route.post('/new', (req,res) => {
    res.send(req.body)
    db.User.findOne({
        where: {
            email: req.body.email
        }
    }).then((result) => {
        if (result) {
            console.log('Email is already in use');
        } else {
            db.User.create({
                firstName: req.body.registerName,
                lastName: req.body.registerSurname,
                email: req.body.registerEmail,
                password: req.body.password
            }).then(user => {
                console.log(user);
            }).catch(err => {
                res.json(err)
            })
        }
    })
});


//Login
route.post('/login', (req,res) => {
    db.User.findOne({
        where:{
            email: req.body.email
        }
    })
    .then(user => {
        if(!user) {
            console.log('Wrong email')
        } else if (!user.password) {
            console.log('Wrong password')
        } else {
            console.log('Logged In')
            }
    })
});



module.exports = route;
