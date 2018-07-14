'use strict';
module.exports = (sequelize, DataTypes) => {
  var Expenses = sequelize.define('Expenses', {
    balance: DataTypes.DOUBLE
  }, {});
  Expenses.associate = function(models) {
    // associations can be defined here
  };
  return Expenses;
};