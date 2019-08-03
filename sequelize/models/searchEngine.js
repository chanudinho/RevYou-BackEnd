'use strict';
module.exports = (sequelize, DataTypes) => {
  const SearchEngine = sequelize.define('SearchEngine', {
    id: {type: DataTypes.STRING(50), primaryKey: true},
    name: DataTypes.STRING
  }, {freezeTableName: true});

  SearchEngine.associate = function(models){
    models.SearchEngine.belongsToMany(models.Project, {
      through: 'ProjectsSearchEngines'
    });
  }

  return SearchEngine;
};