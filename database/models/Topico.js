module.exports = (sequelize, DataTypes) => {
    const Topico = sequelize.define('Topico',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        titulo_topico:{
            type:DataTypes.STRING,
            allowNull:false
        },
        post_time:{
            type:DataTypes.DATE,
            allowNull:false
    },
        tableName:'topico',
        timestamps:false
    })

    return Topico
} 
   
