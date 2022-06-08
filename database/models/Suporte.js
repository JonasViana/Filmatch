module.exports = (sequelize, DataTypes) => {
    const Suporte = sequelize.define('Suporte',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome:{
            type:DataTypes.STRING,
            allowNull:false
        }, 
        assunto:{
            type:DataTypes.STRING,
            allowNull:false
        },
        mensagem:{
            type:DataTypes.STRING,
            allowNull:false
        },

        resolvido:{
            type:DataTypes.DATE,
            allowNull:false
        }

    },{
        tableName:'suporte',
        timestamps:false
    })

    Suporte.associate = (models) => {
        Suporte.belongsTo(models.Usuario, {
          foreignKey: "usuario_id",
          as: "usuario"
        }) 
} 
    return Suporte
}