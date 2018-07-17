const Account = require("../models").Account;
const Transaction = require("../models").Transaction;
module.exports = {
  create(req, res) {
    return Account.create({
      name: req.body.name,
      balance: req.body.balance
    })
      .then(account => res.status(201).send(account))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Account.findAll({
      include: [
        {
          model: Transaction,
          as: "transactions"
        }
      ]
    })
      .then(accounts => res.status(200).send(accounts))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Account.findById(req.params.accountId, {
      include: [
        {
          model: Transaction,
          as: "transactions"
        }
      ]
    })
      .then(account => {
        if (!account) {
          return res.status(404).send({
            message: "Account not found"
          });
        }
        return res.status(200).send(account);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Account.findById(req.params.accountId, {
      include: [
        {
          model: Transaction,
          as: "transactions"
        }
      ]
    })
      .then(account => {
        if (!account) {
          return res.status(404).send({
            message: "Account not found"
          });
        }
        return account
          .update(req.body, {
            fields: Object.keys(req.body)
          })
          .then(() => res.status(200).send(account))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Account.findById(req.params.accountId)
      .then(account => {
        if (!account) {
          return res.status(404).send({
            message: "Account Not Found"
          });
        }
        return account
          .destroy()
          .then(() =>
            res.status(204).send({ message: "Account successfully deleted " })
          )
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
