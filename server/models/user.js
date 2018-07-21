"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING
      },
      gender: {
        type: DataTypes.STRING
      },
      googleId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {}
  );
  User.associate = models => {
    User.hasMany(models.Account, {
      foreignKey: "userId",
      as: "account"
    });
  };
  return User;
};
