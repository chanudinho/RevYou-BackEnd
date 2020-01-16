module.exports = (sequelize, DataTypes) => {
  const AdaptedQuery = sequelize.define(
    'AdaptedQuery',
    {
      id: { type: DataTypes.STRING(50), primaryKey: true },
      query: DataTypes.TEXT,
      adaptedDate: DataTypes.DATE,
      importDate: DataTypes.DATE,
      search: DataTypes.INTEGER,
    },
    { freezeTableName: true, schema: 'public' }
  );

  return AdaptedQuery;
};
