'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t)=>{
      return Promise.all([
        queryInterface.addColumn('usuarios', 'foto_de_fundo',{
          type: Sequelize.STRING,

        }, {transaction: t}),
        queryInterface.addColumn('usuarios', 'titulo_atual',{
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "Iniciante"
        }, {transaction: t})
      ])
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t)=>{
      return Promise.all([
        queryInterface.removeColumn('usuarios', 'foto_de_fundo', { transaction: t }),
        queryInterface.removeColumn('usuarios', 'titulo_atual', { transaction: t })
      ])
    })
  }
};
