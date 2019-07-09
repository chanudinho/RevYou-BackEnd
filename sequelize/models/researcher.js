'use strict';
module.exports = (sequelize, DataTypes) => {
    const Researcher = sequelize.define('Researcher', {
      id: {type: DataTypes.STRING(50), primaryKey: true},
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    }, {freezeTableName: true, schema: 'public'});
    
    Researcher.associate = function(models){
      models.Researcher.belongsToMany(models.Project, {
        through: 'ProjectsResearchers'
      });
      models.Researcher.hasMany(models.Project, {
        as: 'Coordinator', 
        foreignKey: {
          name: 'CoordinatorId',
          allowNull: false
        }, 
        foreignKeyConstraint:true
      });
    }

    return Researcher;
};