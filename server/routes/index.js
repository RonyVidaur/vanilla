const accountsController = require("../controllers").accounts;
const transactionsController = require("../controllers").transactions;
const usersController = require("../controllers").users;
const passport = require("passport");

module.exports = app => {
  //API routes
  app.get("/api/user/account/", accountsController.retrieve);
  app.get("/api/user", usersController.retrieve);
  app.post("/api/user/accounts/transactions", transactionsController.create);
  app.delete(
    "/api/user/accounts/transactions/:transactionId",
    transactionsController.destroy
  );

  app.all("/api/accounts/transactions", (req, res) => {
    res.status(405).send({
      message: "Method Not Allowed"
    });
  });
};
