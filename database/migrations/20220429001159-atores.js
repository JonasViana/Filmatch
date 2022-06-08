module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('atores', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type:Sequelize.STRING,
        allowNull: false
      }
    })
  },
  down:  (queryInterface, Sequelize) => {
     queryInterface.dropTable('atores');
  }
}