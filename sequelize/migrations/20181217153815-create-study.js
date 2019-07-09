'use strict';

var uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Study', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: uuid()
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
    return queryInterface.dropTable('Study');
  }
};