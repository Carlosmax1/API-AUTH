const db = require('../models')
const usuario = require("../models/usuario")

module.exports = {
  create: payload => db.Usuario.create(payload),
  findAll: () => db.Usuario.findAll(),
  createCh: payloadC => db.checkins.create(payloadC),
  findUser: id => db.Usuario.findByPk(id),
  findUserCh: id => db.Usuario.findByPk(id, {
    include: {association: "checkins"}
  }),
  createT: nome => db.titulos.findOrCreate({
    where: { nome }
  }),
  findAllT: id => db.Usuario.findByPk(id, {
    include: {
      association: 'titulos',
      attributes: ['nome'],
      through: {
        attributes: []
      }
    }
  })
};