const bodyParser = require("body-parser");
const express = require('express');
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const routes = require('./routes');
const passport = require('passport');
const helmet = require('helmet');
//socket io
// const http = require("http").createServer(app);
// const io = require('socket.io');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());


// Set up cors
app.use(
  cors({
    origin: '*',
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Content-Type", "Accept"],
    preflightContinue: false,
    credentials: true,
    optionSuccessStatus: 200
  })
)
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

//socket io server side
// io.on('connection', client => {
//   client.on('event', data => {});
//   client.on('disconnect', ()=>{})
// })

//initializes the passport configuration
app.use(passport.initialize());
require("./config/passport_jwt")(passport);
//registers our authentication routes with Express.
app.use(routes);

//Serve static assets if we are in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
})



