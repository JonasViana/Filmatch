module.exports = (sequelize, DataTypes) => {
    const Filme = sequelize.define('filme',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome:{
            type:DataTypes.STRING,
            allowNull:false
        }, 
        descricao:{
            type:DataTypes.STRING,
            allowNull:false
        },
        avaliacao:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        streaming:{
            type:DataTypes.STRING,
            allowNull:false
        },
        facha_etaria:{
            type:DataTypes.STRING,
            allowNull:false
        },
        genero: {
             type: DataTypes.STRING,
             allowNull: true
        },
        poster:{
            type:DataTypes.STRING,
            allowNull:false
        },
        critica1:{
            type:DataTypes.STRING,
            allowNull:false
        },
        critica2:{
            type:DataTypes.STRING,
            allowNull:false
        },
        linkcritica1:{
            type:DataTypes.STRING,
            allowNull:false
        },
        linkcritica2:{
            type:DataTypes.STRING,
            allowNull:false
        },
        autorCritica1:{
            type:DataTypes.STRING,
            allowNull:false
        },
        autorCritica2:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        tableName:'filme',
        timestamps:false
    })

    return Filme
} 

