"use strict";
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define(
    "Expense",
    {
      balance: {
        type: DataTypes.DOUBLE,
        allowNull: false
      }
    },
    {}
  );

  Expense.associate = models => {
    Expense.hasMany(models.Transaction, {
      foreignKey: "expenseId",
      as: "transactions"
    });
  };
  return Expense;
};
