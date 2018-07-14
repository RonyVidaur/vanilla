const expensesController = require("../controllers").expenses;
const transactionsController = require("../controllers").transactions;
module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Accounts API"
    })
  );

  /* expenses - accounts */
  app.post("/api/expenses", expensesController.create);
  app.get("/api/expenses", expensesController.list);
  app.get("/api/expenses/:expenseId", expensesController.retrieve);
  app.put("/api/expenses/:expenseId", expensesController.update);
  app.post(
    "/api/expenses/:expenseId/transactions",
    transactionsController.create
  );
};
