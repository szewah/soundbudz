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
        var email = req.body.email;
        console.log("These are the params  " + req.params);
        User.findOne({
            where: {email}
        })
        .then(user => {
            res.json(user)
        })
        .catch((err) => res.status(422).json(err));
    }
};

