const expensesController = require("../controllers").expenses;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Expenses API"
    })
  );

  app.post("/api/expenses", expensesController.create);
  app.get("/api/expenses", expensesController.list);
};
