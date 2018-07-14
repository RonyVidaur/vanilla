"use strict";
module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define(
    "Transaction",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  Transaction.associate = models => {
    Transaction.belongsTo(models.Expenses, {
      foreignKey: "expensesId",
      onDelete: "CASCADE"
    });
  };
  return Transaction;
};
