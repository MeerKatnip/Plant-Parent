"use strict";
module.exports = (sequelize, DataTypes) => {
  const Plant = sequelize.define(
    "Plant",
    {
      name: DataTypes.STRING,
      photoURL: DataTypes.STRING,
      type: DataTypes.STRING,
      light: DataTypes.STRING,
      water: DataTypes.STRING,
      howToGrow: DataTypes.STRING,
      peakSeason: DataTypes.STRING,
      lifespan: DataTypes.STRING,
      usda: DataTypes.STRING,
    },
    {}
  );
  Plant.associate = function (models) {
    // associations can be defined here
  };
  return Plant;
};
