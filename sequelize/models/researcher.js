'use strict';
module.exports = (sequelize, DataTypes) => {
    const Researcher = sequelize.define('Researcher', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    });
    
    return Researcher;
};