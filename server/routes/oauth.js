// OAuth routes, placed before the middleware because we don't want to check session for this
const passport = require("passport");
module.exports = app => {
  app.get(
    "/google",
    passport.authenticate("google", {
      scope: ["profile"]
    })
  );

  app.get("/google/redirect", passport.authenticate("google"), (req, res) => {
    res.redirect("/app/");
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
