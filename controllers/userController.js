const User = require('../models/').User;

module.exports = {
    findAll: function(req, res) {
        User.findAll()
        .then(user => {
            res.json(user);
        })
        .catch((err) => res.status(422).json(err));
    },
    findOne: function(req, res) {
        User.findOne(req.params.id)
        // User.findByPk(req.params.id)
        .then(user => {
            console.log("[DEBUG] users " + user.id)
            res.json(user)
        })
        .catch((err) => console.log(err));
    }
};

