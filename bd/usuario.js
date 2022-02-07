module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define ("usuario", {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nome:{
            type: DataType.TEXT,
            allowNull: false,
        },
        email:{
            type: DataType.TEXT,
            allowNull: false,
        },
        senha:{
            type: DataType.TEXT,
            allowNull: false,
        },
    }, {
        tableName: "usuario",
        timestamps: false,
    });

    return Usuario;

}