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

require("./server/routes")(app);
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to Vanilla API"
  })
);

module.exports = app;
