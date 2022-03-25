const db = require('../models')

module.exports = {
  create: payload => db.Usuario.create(payload),
  findAll: () => db.Usuario.findAll()
}