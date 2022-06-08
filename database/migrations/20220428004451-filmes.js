module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('filmes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type:Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type:Sequelize.STRING,
        allowNull: false
      },
      duracao:{
        type:Sequelize.DATE,
        allowNull: false
      },
      avaliacao: {
        type:Sequelize.INTEGER
        //allowNull: false
      },
      streaming: {
        type:Sequelize.STRING
        //allowNull: false
      },
      facha_etaria: {
        type:Sequelize.STRING,
        allowNull: false
      },
      generos_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "generos",
            key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
    }
    })
  },
  down:  (queryInterface, Sequelize) => {
     queryInterface.dropTable('filmes');
  }
}