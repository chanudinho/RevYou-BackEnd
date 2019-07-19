'use strict';

module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
      id: {type: DataTypes.STRING(50), primaryKey: true},
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      objective: DataTypes.TEXT
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
    }

    return Project;
};