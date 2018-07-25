const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const models = require("../models");

passport.serializeUser((user, done) => {
  done(null, user.googleId);
});

passport.deserializeUser((id, done) => {
  models.User.findOne({ where: { id: id } }).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      const user = {
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        gender: profile.gender,
        googleId: profile.id
      };

      models.sequelize.transaction(function(t) {
        return models.User.findOrCreate({
          where: { googleId: profile.id },
          defaults: { ...user },
          transaction: t
        }).spread((userResult, created) => {
          if (created) {
            models.Account.create({
              name: "main",
              balance: 0,
              userId: profile.id
            });
            done(null, user);
          } else {
            done(null, userResult);
          }
        });
      });
    }
  )
);
