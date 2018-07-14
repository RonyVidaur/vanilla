"use strict";
module.exports = (sequelize, DataTypes) => {
  var Expenses = sequelize.define(
    "Expenses",
    {
      balance: DataTypes.DOUBLE
    },
    {}
  );
  Expenses.associate = models => {
    Expenses.hasMany(models.transaction, {
      foreignKey: "expensesId",
      as: "transactions"
    });
  };
  return Expenses;
};
