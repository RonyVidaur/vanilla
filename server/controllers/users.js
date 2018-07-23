const Account = require("../models").Account;
const User = require("../models").User;
const Transaction = require("../models").Transaction;
module.exports = {
  create(req, res) {
    return User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      googleId: req.body.googleId,
      gender: req.body.gender
    })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return User.findAll({
      include: [
        {
          model: Account,
          as: "account",
          include: [{ model: Transaction, as: "transactions" }]
        }
      ]
    })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return User.findOne(
      { where: { googleId: req.user.googleId } },
      {
        include: [
          {
            model: Account,
            as: "account"
          }
        ]
      }
    )
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: "User not found"
          });
        }
        return res.status(200).send(user);
      })
      .catch(error => res.status(400).send(error));
  }
};
