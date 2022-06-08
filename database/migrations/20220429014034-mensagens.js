module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('mensagens', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mensagem: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false
      }
      })
  },
  down:  (queryInterface, Sequelize) => {
     queryInterface.dropTable('mensagens');
  }
}