"use strict";
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    "Account",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      balance: {
        type: DataTypes.DOUBLE,
        allowNull: false
      }
    },
    {}
  );

  Account.associate = models => {
    Account.hasMany(models.Transaction, {
      foreignKey: "accountId",
      as: "transactions"
    });
    Account.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return Account;
};
