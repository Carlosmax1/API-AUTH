'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class checkins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario, {
        foreignKey: "user_id"
      })
    }
  }
  checkins.init({
    local: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'checkins',
  });
  return checkins;
};