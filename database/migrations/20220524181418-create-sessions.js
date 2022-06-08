module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('sessoes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type:Sequelize.STRING(60),
        allowNull: false
      },
      data: {
        type:Sequelize.STRING(20),
        allowNull: false
      },
      horario:{
        type:Sequelize.STRING(20),
        allowNull: false
      },
      link: {
        type:Sequelize.STRING(100),
        allowNull: false
      }
    })
  },
  down:  (queryInterface, Sequelize) => {
     queryInterface.dropTable('sessoes');
  }
}
