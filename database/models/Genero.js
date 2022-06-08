module.exports = (sequelize, DataTypes) => {
    const Genero = sequelize.define('Genero',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        genero:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        tableName:'Genero',
        timestamps:false
    })

    /*Genero.associate = (models) => {
        Genero.belongsTo(models.Filme, {
          foreignKey: "filme_id",
          as: "filme"
        }) 

    Genero.hasMany(models.Filme, {
        foreignKey:"genero_id",
        as: "filmes"
    })*/
    return Genero
} 
   
