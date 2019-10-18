const User = require('../models/').User;

module.exports = {
    findAll: function(req, res) {
        User.findAll()
        .then(user => {
            res.json(user);
        })
        .catch((err) => res.status(422).json(err));
    },
    findByPk: function(req, res) {
        User.findByPk(req.params.id)
        .then(user => {
            res.json(user)
        })
        .catch((err) => console.log(err));
    }
};

