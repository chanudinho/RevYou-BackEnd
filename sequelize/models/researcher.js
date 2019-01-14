'use strict';
module.exports = (sequelize, DataTypes) => {
    const researcher = sequelize.define('Researcher', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    });
    researcher.associate = function(models) {
        // associations can be defined here
    };
    return researcher;
  };