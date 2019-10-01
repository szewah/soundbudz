//Route to the database to encrypt password and to register user
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const key = require('../config/key');

router.post('/registration', (req, res) => {
    if(err) throw err;
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(user) {
            res.json({
                email: 'This email already exists'
            });
        } else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
                    if(err) throw err;
                    User.create({
                        firstName: req.body.registerName, 
                        lastName: req.body.registerSurname,
                        email: req.body.registerEmail,
                        password: hashedPassword
                    })
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                });
            });
        }
    });
});

router.post('/login', (req, res) => {
    if(err) throw errr;

    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(!user) {
            res.json({
                emailNotFound: 'Email not found'
            });
        }
        bcrypt.compare(req.body.password, user.password)
        .then(matched => {
            if(matched) {
                const payload = {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName
                };
                jwt.sign(payload, key.secretOrKey, {expiresIn: "2 days"}, (err, token) => {
                    res.json({
                        user: {
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email
                        },
                        success: true,
                        token: 'Bearer ' + token
                    });
                });
            } else {
                return res.json({
                    passwordIncorrect: 'The password is incorrect'
                });
            }
        });
    });
});

module.exports = router;



