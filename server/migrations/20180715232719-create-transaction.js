"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Transactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.DOUBLE
      },
      type: {
        type: Sequelize.INTEGER
      },
      tag: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      accountId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Accounts",
          key: "id",
          as: "accountId"
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Transactions");
  }
};
