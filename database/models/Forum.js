module.exports = (sequelize, DataTypes) => {
    const Forum = sequelize.define('Forum',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        titulo:{
            type:DataTypes.STRING,
            allowNull:false
        },
        descricao:{
            type:DataTypes.STRING,
            allowNull:false
        },
        data_horario:{
            type:DataTypes.DATE,
            allowNull:false
        },
        post:{
            type:DataTypes.INTEGER,
            allowNull:false
    },
        tableName:'forum',
        timestamps:false
    })

    Forum.associate = (models) => {
        Forum.hasMany(models.Topico, {
        foreignKey:"forum_id",
        as: "topicos"
    })
}
    return Forum
}