const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const passportConfig = require("./server/config/passport-config");
const cookieSession = require("cookie-session");
const keys = require("./server/config/keys");
const passport = require("passport");
const app = express();

app.use(logger("dev"));
app.use(
  cookieSession({ maxAge: 24 * 60 * 60 * 1000, keys: [keys.session.cookieKey] })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./server/routes/oauth")(app);

// custom middleware to check for authentication
authCheck = (req, res, next) => {
  !req.user
    ? res.status(400).send({
        message: "Invalid Credentials",
        route: req.originalUrl,
        method: req.method,
        time: Date.now()
      })
    : next();
};

app.use(authCheck);
require("./server/routes/index")(app);
module.exports = app;
