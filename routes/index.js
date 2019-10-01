//Export this file to app.js server side
const authorizationRoutes = require('./auth').;
const path = require('path');

//API routes
router.use('/auth', authorizationRoutes);

//If no API routes are hit, send the front of the react app
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
})

module.exports = app;


