module.exports = (sequelize, DataTypes) => {
    const Sessao = sequelize.define('sessoes',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        data:{
            type:DataTypes.DATE,
            allowNull:false
        }, 
        horario:{
            type:DataTypes.TIME,
            allowNull:false
        },
        nome:{
            type:DataTypes.STRING,
            allowNull:false
        },
        link:{
            type:DataTypes.STRING,
            allowNull:false
        },
        descricao:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        tableName:'sessoes',
        timestamps:false
    })

    // Sessao.belongsToMany(models.Usuario, {
    //     foreignKey:"usuario_id",
    //     as: "usuarios"
    // })

    return Sessao
}