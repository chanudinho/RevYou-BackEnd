"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            "Project", // name of Source model
            "CoordinatorId", // name of the key we're adding
            {
              type: Sequelize.UUID,
              references: {
                model: "Researcher", // name of Target model
                key: "id" // key in Target model that we're referencing
              },
              onUpdate: "CASCADE",
              onDelete: "SET NULL"
            }
        )
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
          "Project", // name of Source model
          "CoordinatorId" // key we want to remove
        )
    }
    
}