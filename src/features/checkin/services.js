const db = require('../../_db/models');

module.exports = {
  create: payload => db.Checkin.create(payload),
  findUser: id => db.Usuario.findByPk(id)
}