"use strict";
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
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
    Transaction.belongsTo(models.Account, {
      foreignKey: "accountId",
      onDelete: "CASCADE"
    });
  };
  return Transaction;
};
