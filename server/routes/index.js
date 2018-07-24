const accountsController = require("../controllers").accounts;
const transactionsController = require("../controllers").transactions;
const usersController = require("../controllers").users;
const passport = require("passport");

module.exports = app => {
  const authCheck = (req, res, next) => {
    !req.user
      ? res.status(400).send({ message: "Unauthorized Request" })
      : next();
  };

  app.get("/api", authCheck, (req, res) =>
    res.status(200).send({
      message: "Accounts API"
    })
  );

  //API routes
  app.get("/api/user/account/", accountsController.retrieve);
  app.get("/api/user", usersController.retrieve);
  app.post("/api/user/accounts/transactions", transactionsController.create);
  app.delete(
    "/api/user/accounts/transactions/:transactionId",
    transactionsController.destroy
  );

  // OAuth routes
  app.get(
    "/google",
    passport.authenticate("google", {
      scope: ["profile"]
    })
  );

  app.get("/google/redirect", passport.authenticate("google"), (req, res) => {
    res.redirect("/");
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.all("/api/accounts/transactions", (req, res) => {
    res.status(405).send({
      message: "Method Not Allowed"
    });
  });
};
