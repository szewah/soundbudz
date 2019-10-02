const User = require('../models').User;
const bcrypt = require('bcryptjs');
var express = require('express');
var userRoute = express.Router();

//Registering new user
userRoute.post('/api/registration', (req,res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then((result) => {
        if (result) {
            res.json({foundEmail: 'Email is already in use'})
        } else {
            bcrypt.genSalt(10, (err, salt)=> {
                bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
                    if(err) throw err;
                    User.create({
                        firstName: req.body.registereName,
                        lastName: req.body.registerSurname,
                        email: req.body.registerEmail,
                        password: req.body.password
                    }).then(user => {
                        console.log(user);
                    }).catch(err => {
                        console.log(err.user)
                    })
                })
            })
        }
    })
});


//Login
userRoute.post('./api/login', (req,res) => {
    var email = req.body.email;
    var password = req.body.password;
    User.findOne({
        where:{
            email: email
        }
    })
    .then(user => {
        if(!user) {
            console.log('Wrong email')
        } else if (!user.password) {
            console.log('Wrongpassword')
        } else {
            console.log('Logged In')
            }
    })
});



module.exports = userRoute;
