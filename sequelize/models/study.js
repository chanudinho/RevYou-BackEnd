'use strict';
module.exports = (sequelize, DataTypes) => {
  const study = sequelize.define('study', {
    title: DataTypes.STRING,
    authors: DataTypes.STRING,
    citekey: DataTypes.STRING,
    keywords: DataTypes.STRING,
    venue: DataTypes.STRING,
    year: DataTypes.STRING,
    pages: DataTypes.STRING,
    volume: DataTypes.STRING,
    url: DataTypes.STRING,
    issn: DataTypes.STRING,
    doi: DataTypes.STRING
  });

  return study;
};