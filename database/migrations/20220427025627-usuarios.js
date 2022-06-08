module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('usuario', {
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
      email: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      nasc: {
        type: Sequelize.DATE(6),
        allowNull: false
      },
      genero: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      bio:{
        type:Sequelize.STRING,
        //allowNull:false
    },
    ocupacao:{
        type:Sequelize.STRING,
        //allowNull:false
    },
    hobbies:{
        type:Sequelize.STRING,
        //allowNull:false
    },
    filmePref:{
        type:Sequelize.STRING,
        //allowNull:false
    }
    })
  },
  down:  (queryInterface, Sequelize) => {
     queryInterface.dropTable('usuario');
  }
}
