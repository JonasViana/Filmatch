module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('topicos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      tituloTopico: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      postTime: {
        type: Sequelize.DATE,
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
    },
      forum_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "forum",
            key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
    }
      })
  },
  down:  (queryInterface, Sequelize) => {
     queryInterface.dropTable('topicos');
  }
}