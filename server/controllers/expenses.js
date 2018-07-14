const Expense = require("../models").Expense;
const Transaction = require("../models").Transaction;
module.exports = {
  create(req, res) {
    return Expense.create({
      balance: req.body.balance
    })
      .then(expense => res.status(201).send(expense))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Expense.findAll({
      include: [
        {
          model: Transaction,
          as: "transactions"
        }
      ]
    })
      .then(expenses => res.status(200).send(expenses))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Expense.findById(req.params.expenseId, {
      include: [
        {
          model: Transaction,
          as: "transactions"
        }
      ]
    })
      .then(expense => {
        if (!expense) {
          return res.status(404).send({
            message: "Account not found"
          });
        }
        return res.status(200).send(expense);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Expense.findById(req.params.expenseId, {
      include: [
        {
          model: Transaction,
          as: "transactions"
        }
      ]
    })
      .then(expense => {
        if (!expense) {
          return res.status(404).send({
            message: "Account not found"
          });
        }
        return expense
          .update(req.body, {
            fields: Object.keys(req.body)
          })
          .then(() => res.status(200).send(expense))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Expense.findById(req.params.expenseId)
      .then(expense => {
        if (!expense) {
          return res.status(404).send({
            message: "Account Not Found"
          });
        }
        return expense
          .destroy()
          .then(() =>
            res.status(204).send({ message: "Account successfully deleted " })
          )
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
