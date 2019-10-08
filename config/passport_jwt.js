//passport-jwt is middleware for getting and verifying JWTs
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var User = require('../models').User;
var opts = {}  
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = require('./jwtSecret');


module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            User.findByPk(jwt_payload.id)
            .then(user => {
                if(user) {
                    return done(null, user)
                }
                else {
                    return done(null, false);
                }
            }).catch(err => console.error(err))
        })
    );
};
