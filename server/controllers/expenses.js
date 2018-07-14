const Expense = require("../models").Expense;

module.exports = {
  create(req, res) {
    return Expense.create({
      balance: req.body.balance
    })
      .then(expense => res.status(201).send(expense))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Expense.all()
      .then(expenses => res.status(200).send(expenses))
      .catch(error => res.status(400).send(error));
  }
};
