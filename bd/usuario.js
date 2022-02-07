module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define(
      "usuario",
      {
        id: {
          type: DataType.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: DataType.STRING(200),
          allowNull: false,
        },
        email: {
          type: DataType.STRING(200),
          allowNull: false,
        },
        senha: {
          type: DataType.STRING(200),
          allowNull: false,
        },
        cadastratoEm: {
          type: DataType.DATE,
          allowNull: false
        }
      },
      {
        tableName: "usuario",
        timestamps: false,
      }
    );
  
    return Usuario;
  }