//routes to the database to encrypt password and to register user
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const keys = require('../config/key');


module.exports = function(app) {
    /*GET registration page*/
    app.post('/registration', function(req, res, next) {
        if (err) {
            console.log('An error occured');
        }
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if(user) {
                res.json({email: "Email already exists"});
            } else {

            }
        })
    })
}

