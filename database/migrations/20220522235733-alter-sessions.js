module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('sessoes', 'link', {
      type: Sequelize.STRING(100),
      allowNull: false
    });
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('sessoes', 'link');
  }
};

