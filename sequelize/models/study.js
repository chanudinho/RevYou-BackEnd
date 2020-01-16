module.exports = (sequelize, DataTypes) => {
  const Study = sequelize.define(
    'Study',
    {
      id: { type: DataTypes.STRING(50), primaryKey: true },
      title: DataTypes.TEXT,
      authors: DataTypes.TEXT,
      citekey: DataTypes.TEXT,
      abstract: DataTypes.TEXT,
      keywords: DataTypes.TEXT,
      venue: DataTypes.STRING,
      year: DataTypes.STRING,
      pages: DataTypes.STRING,
      volume: DataTypes.STRING,
      url: DataTypes.STRING,
      issn: DataTypes.STRING,
      doi: DataTypes.STRING,
      base: DataTypes.STRING,
      search: DataTypes.INTEGER,
      generalStatus: DataTypes.ENUM(
        'Unclassified',
        'Duplicated',
        'Included',
        'Excluded'
      ),
      venueType: DataTypes.ENUM(
        'Journal',
        'Conferecence Pronceendings',
        'Technical Report',
        'Thesis',
        'Book'
      ),
    },
    { freezeTableName: true, schema: 'public' }
  );

  return Study;
};
