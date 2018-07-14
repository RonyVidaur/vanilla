const Transaction = require("../models").Transaction;

module.exports = {
  create(req, res) {
    return Transaction.create({
      title: req.body.title,
      amount: req.body.amount,
      type: req.body.type,
      accountId: req.body.accountId
    })
      .then(transaction => res.status(201).send(transaction))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Transaction.find({
      where: {
        id: req.params.transactionId,
        accountId: req.params.accountId
      }
    })
      .then(transaction => {
        if (!transaction) {
          return res.status(404).send({
            message: "Transaction not found"
          });
        }
        return transaction
          .update(req.body, { fields: Object.keys(req.body) })
          .then(updatedTransaction => res.status(200).send(updatedTransaction))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Transaction.find({
      where: {
        id: req.params.transactionId,
        accountId: req.params.accountId
      }
    })
      .then(transaction => {
        if (!transaction) {
          return res.status(404).send({
            message: "Transaction Not Found"
          });
        }
        return transaction
          .destroy()
          .then(() =>
            res
              .status(204)
              .send({ message: "Transaction Successfully Deleted" })
          )
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
