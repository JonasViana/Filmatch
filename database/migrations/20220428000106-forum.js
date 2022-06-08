module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('forum', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      assunto: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      mensagem: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      resolvido: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      usuarios_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "usuario",
            key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
    }
    })
  },
  down:  (queryInterface, Sequelize) => {
     queryInterface.dropTable('forum');
  }
}
