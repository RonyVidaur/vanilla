"use strict";
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      title: DataTypes.STRING,
      amount: DataTypes.DOUBLE,
      type: DataTypes.INTEGER
    },
    {}
  );
  Transaction.associate = models => {
    Transaction.belongsTo(models.Expense, {
      foreignKey: "expenseId",
      onDelete: "CASCADE"
    });
  };
  return Transaction;
};
