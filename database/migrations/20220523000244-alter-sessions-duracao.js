module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('sessoes', 'duracao', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('sessoes', 'duracao');
  }
};


