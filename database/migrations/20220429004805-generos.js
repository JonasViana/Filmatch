module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('generos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      acao: {
        type:Sequelize.STRING,
        allowNull: false
      },
      aventura: {
        type:Sequelize.STRING,
        allowNull: false
      },
      comedia: {
        type:Sequelize.STRING,
        allowNull: false
      },
      romance: {
        type:Sequelize.STRING,
        allowNull: false
      },
      terror: {
        type:Sequelize.STRING,
        allowNull: false
      },
      suspense: {
        type:Sequelize.STRING,
        allowNull: false
      },
      drama: {
        type:Sequelize.STRING,
        allowNull: false
      },
      classicos: {
        type:Sequelize.STRING,
        allowNull: false
      },
      fantasia: {
        type:Sequelize.STRING,
        allowNull: false
      },
      ficcao_cientifica: {
        type:Sequelize.STRING,
        allowNull: false
      }
    })
  },
  down:  (queryInterface, Sequelize) => {
     queryInterface.dropTable('generos');
  }
} 
