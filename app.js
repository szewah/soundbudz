const bodyParser = require("body-parser");
const express = require('express');
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const routes = require('./routes');
const passport = require('passport');
const helmet = require('helmet');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Set up cors
// app.use(
//   cors({
//     origin: '*',
//     // requireHeader: ['origin', 'x-requested-with'],
//     allowedHeaders: "Authorization",
//     preflightContinue: false,
//     credentials: true,
//     optionSuccessStatus: 200
//   })
// )

//initializes the passport configuration
app.use(passport.initialize());
require("./config/passport_jwt")(passport);
//registers our authentication routes with Express.
app.use(routes);



app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
})



