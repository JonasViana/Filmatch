module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('usuario', 'senhaLogin', {
      type: Sequelize.STRING(60),
      allowNull: false
    });
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('usuario', 'senhaLogin');
  }
};
