'use strict';
 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('filmes', 'genero_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "generos",
        key: "id"
    },
    onUpdate: "cascade",
    onDelete: "cascade"
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('filmes', 'genero_id');
  }
};