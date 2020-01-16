module.exports = (sequelize, DataTypes) => {
  const SelectionCriteria = sequelize.define(
    'SelectionCriteria',
    {
      id: { type: DataTypes.STRING(50), primaryKey: true },
      description: DataTypes.TEXT,
      type: DataTypes.ENUM('Inclusion', 'Exclusion'),
    },
    { freezeTableName: true, schema: 'public' }
  );

  return SelectionCriteria;
};
