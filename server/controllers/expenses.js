const Expense = require("../models").Expense;

module.exports = {
  create(req, res) {
    return Expense.create({
      balance: req.body.balance
    })
      .then(expense => res.status(201).send(expense))
      .catch(error => res.status(400).send(error));
  }
};
