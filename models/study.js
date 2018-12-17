'use strict';
module.exports = (sequelize, DataTypes) => {
  const study = sequelize.define('study', {
    title: DataTypes.STRING
  }, {});
  study.associate = function(models) {
    // associations can be defined here
  };
  return study;
};