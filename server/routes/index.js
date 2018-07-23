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
  app.get("/api/user/accounts/", accountsController.list);
  // app.get("/api/users/:userId/account/", accountsController.list);
  app.get("/api/users", usersController.list);
  app.get("/api/user", usersController.retrieve);
  app.post("/api/users/:userId/accounts", accountsController.create);
  app.get(
    "/api/users/:userId/account/:accountId/transactions",
    transactionsController.list
  );
  app.get(
    "/api/users/:userId/accounts/:accountId",
    accountsController.retrieve
  );
  app.put("/api/users/:userId/accounts/:accountId", accountsController.update);
  app.post("/api/user/accounts/transactions", transactionsController.create);
  app.put(
    "/api/accounts/:accountId/transactions/:transactionId",
    transactionsController.update
  );
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
    res.redirect("http://localhost:3000");
  });

  app.get("auth/logout", (req, res) => {});

  app.all("/api/accounts/:accountId/transactions", (req, res) => {
    res.status(405).send({
      message: "Method Not Allowed"
    });
  });
};
