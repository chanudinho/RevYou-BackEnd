module.exports = (sequelize, DataTypes) => {
  const Invitation = sequelize.define(
    'Invitation',
    {
      id: { type: DataTypes.STRING(50), primaryKey: true },
      email: DataTypes.STRING,
      situation: DataTypes.ENUM('accept', 'denied', 'pending'),
    },
    { freezeTableName: true, schema: 'public' }
  );

  return Invitation;
};
