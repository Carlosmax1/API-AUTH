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
      this.hasMany(models.Checkin,{
        foreignKey: "user_id"
      })
    }
  }
  Usuario.init({
    email: DataTypes.STRING,
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    apelido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};