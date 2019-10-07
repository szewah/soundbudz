var db = require('../models/');
var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var bcrypt = require('bcryptjs');

// router.post('/new', userController.create);

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
                            .catch(err => res.status(400).json(err));
                        })
                    })
                }
            })

})





//Login


// Find all users
router.get('/all', userController.findAll);

module.exports = router;
