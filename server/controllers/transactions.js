const Transaction = require("../models").Transaction;

module.exports = {
  create(req, res) {
    return Transaction.create({
      title: req.body.title,
      amount: req.body.amount,
      type: req.body.type,
      expenseId: req.body.expenseId
    })
      .then(transaction => res.status(201).send(transaction))
      .catch(error => res.status(400).send(error));
  }
};
