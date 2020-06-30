"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Plants", "usda", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Plants", "type", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Plants", "light", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Plants", "water", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Plants", "howToGrow", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Plants", "peakSeason", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Plants", "lifespan", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn("Plants", "usdaZones")]);
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};
