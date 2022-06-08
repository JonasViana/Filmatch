module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome:{
            type:DataTypes.STRING,
            allowNull:false
        }, 
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        senha:{
            type:DataTypes.STRING,
            allowNull:false
        },

        nasc:{
            type:DataTypes.DATE,
            allowNull:false
        },
        genero:{
            type:DataTypes.STRING,
            allowNull:false
        },
        bio:{
            type:DataTypes.STRING,
            //allowNull:false
        },
        ocupacao:{
            type:DataTypes.STRING,
            //allowNull:false
        },
        hobbies:{
            type:DataTypes.STRING,
            //allowNull:false
        },
        filmePref:{
            type:DataTypes.STRING,
            //allowNull:false
        }

    },{
        tableName:'usuario',
        timestamps:false
    })

    Usuario.associate = (models) => {
        Usuario.hasMany(models.Suporte, {
          foreignKey: "suporte_id",
          as: "suportes"
        });
} 
    return Usuario
}