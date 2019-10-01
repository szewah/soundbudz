const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const routes = require('./routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Set up cors
app.use(
  cors({
    origin: "*",
    allowedHeaders: "Authorization",
    preflightContinue: false,
    credentials: true,
    optionSuccessStatus: 200
  })
)


app.use(routes);

app.listen(PORT, function() {
  console.log(`Listening on port http://localhost:${PORT}`);
})



