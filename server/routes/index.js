const expensesController = require("../controllers").expenses;
const transactionsController = require("../controllers").transactions;
module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Expenses API"
    })
  );

  /* expenses - accounts */
  app.post("/api/expenses", expensesController.create);
  app.get("/api/expenses", expensesController.list);
  app.post(
    "/api/expenses/:expenseId/transactions",
    transactionsController.create
  );
};
