const db = require('../models')

module.exports = {
  create: payload => db.Usuario.create(payload)
}