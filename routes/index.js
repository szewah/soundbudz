const registerAPI = require('./register');
const loginAPI = require('./login');
const path = require('path');

//API routes
app.use('/registration', registerAPI);
app.use('/login', loginAPI);

//If no API routes are hit, send the front of the react app
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
})

module.exports = app;


