'use strict';
module.exports = (sequelize, DataTypes) => {
    const SecondaryQuestion = sequelize.define('SecondaryQuestion', {
      id: {type: DataTypes.STRING(50), primaryKey: true},
      description: DataTypes.TEXT
    }, {freezeTableName: true, schema: 'public'});

    return SecondaryQuestion;
};