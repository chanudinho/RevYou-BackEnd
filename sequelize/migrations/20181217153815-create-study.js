'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('study', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      authors: {
        type: Sequelize.STRING
      },
      citekey:{
        type: Sequelize.STRING
      },
      keywords: {
        type: Sequelize.STRING
      },
      venue: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      pages: {
        type: Sequelize.STRING
      },
      volume: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      issn: {
        type: Sequelize.STRING
      },
      doi: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('study');
  }
};