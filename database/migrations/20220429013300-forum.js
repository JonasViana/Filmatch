module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('forum', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dataHorario: {
        type: Sequelize.DATE,
        allowNull: false
      },
      post: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
      })
  },
  down:  (queryInterface, Sequelize) => {
     queryInterface.dropTable('forum');
  }
}