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
    }
};

