module.exports = (sequelize, DataTypes) => {
    const Ator = sequelize.define('Ator',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        tableName:'Ator',
        timestamps:false
    })
    
    return Ator
} 
 
