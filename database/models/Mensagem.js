module.exports = (sequelize, DataTypes) => {
    const Mensagem = sequelize.define('Mensagems',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome:{
            type:DataTypes.STRING,
            allowNull:false
        },
        mensagem:{
            type:DataTypes.STRING,
            allowNull:false
        },
        data:{
        type:DataTypes.DATE,
        allowNull:false
        }
    },{
        tableName:'mensagems',
        timestamps:false
    })
    return Mensagem
}
    
