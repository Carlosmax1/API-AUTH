'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasMany(models.checkins,{
        foreignKey: "user_id"
      });
      Usuario.belongsToMany(models.titulos, {
        foreignKey: "user_id", through: 'user_titulos', 
      })
    }
  }
  Usuario.init({
    nome: DataTypes.STRING,
    apelido: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    fotoDePerfil: DataTypes.STRING,
    foto_de_fundo: DataTypes.STRING,
    titulo_atual: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};