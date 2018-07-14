const accountsController = require("../controllers").accounts;
const transactionsController = require("../controllers").transactions;
module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Accounts API"
    })
  );

  app.post("/api/accounts", accountsController.create);
  app.get("/api/accounts", accountsController.list);
  app.get("/api/accounts/:accountId", accountsController.retrieve);
  app.put("/api/accounts/:accountId", accountsController.update);
  app.delete("/api/accounts/:accountId", accountsController.destroy);
  app.post(
    "/api/accounts/:accountId/transactions",
    transactionsController.create
  );
  app.put(
    "/api/accounts/:accountId/transactions/:transactionId",
    transactionsController.update
  );
  app.delete(
    "/api/accounts/:accountId/transactions/:transactionId",
    transactionsController.destroy
  );

  app.all("/api/accounts/:accountId/transactions", (req, res) => {
    res.status(405).send({
      message: "Method Not Allowed"
    });
  });
};
