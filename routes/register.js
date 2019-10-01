//Route to the database to encrypt password and to register user
const User = require('../models/user');
const bcrypt = require('bcryptjs');


module.exports = function(app) {
    /*POST new user on registration page*/
    app.post('/registration', function(req, res, next) {
        console.log(req.body);
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
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
                        if (err) throw err;
                        User.create({
                            firstName: req.body.registerName,
                            lastName: req.body.registerSurname,
                            email: req.body.registerEmail,
                            password: hashedPassword
                        })
                        .then(user => {
                            console.log('user created');
                            return done(null, user);
                        })
                        .catch(err => done(err));
                    })
                })
            }
        })
    })
}

