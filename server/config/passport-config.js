const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const models = require("../models");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  models.User.findById(id).then(user => {
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
      models.User.findOrCreate({
        where: { ...user }
      }).spread((userResult, created) => {
        if (created) {
          done(null, user);
        } else {
          done(null, userResult);
        }
      });
    }
  )
);
