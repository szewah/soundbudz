const User = require('../models/').User;

module.exports = {
    findAll: function(req, res) {
        User.findAll()
        .then(user => {
            res.json(user);
        })
        .catch((err) => res.status(422).json(err));
    },
    findById: function(req, res) {
        User.findById(req.params.id)
        .then(dbModel => {
            res.json(dbModel)
        })
        .catch((err) => res.status(422).json(err));
    },
    create: function(req, res) {
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })
        .then(newUser=> {
            res.json(newUser)
        })
        .catch((err) => res.status(422).json(err))
    }
};

