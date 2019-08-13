'use strict';

module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
      id: {type: DataTypes.STRING(50), primaryKey: true},
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      objective: DataTypes.TEXT,
      reviewType: DataTypes.ENUM('Systematic Review', 'Systematic Mapping', 'Not Systematic')
    }, {freezeTableName: true, schema: 'public'});
    
    Project.associate = function(models){
        models.Project.belongsToMany(models.Researcher, {
            as: 'Researcher', 
            through: 'ProjectsResearchers',
            onDelete: "cascade"
        });
        models.Project.hasMany(models.Invitation, {
            as: 'Inviteds',
            foreignKey: {
              name: 'ProjectId',
              allowNull: false
            }, 
            foreignKeyConstraint:true
        });
        models.Project.hasMany(models.SecondaryQuestion, {
          as: 'SecondaryQuestion',
          foreignKey: {
            name: 'ProjectId',
            allowNull: false
          }, 
          foreignKeyConstraint:true
      });
      models.Project.hasMany(models.SearchKeyword, {
        as: 'SearchKeyword',
        foreignKey: {
          name: 'ProjectId',
          allowNull: false
        }, 
        foreignKeyConstraint:true
      });
      models.Project.hasMany(models.SelectionCriteria, {
        as: 'SelectionCriteria',
        foreignKey: {
          name: 'ProjectId',
          allowNull: false
        }, 
        foreignKeyConstraint:true
      });
      models.Project.hasMany(models.Study, {
        as: 'Study',
        foreignKey: {
          name: 'ProjectId',
          allowNull: false
        }, 
        foreignKeyConstraint:true
      });
      //* - *
      models.Project.belongsToMany(models.Language, {
        as: 'Languagues', 
        through: 'ProjectsLanguages',
        onDelete: "cascade"
      });
      models.Project.belongsToMany(models.SearchEngine, {
        as: 'SearchEngines', 
        through: 'ProjectsSearchEngines',
        onDelete: "cascade"
      });
    }

    return Project;
};