const User = require('../models/user').User;

module.exports = {
    findById: function(req, res) {
        User.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Group
                }
            ]

        })
    }
}