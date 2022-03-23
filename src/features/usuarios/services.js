const db = require('../../_db/models');

module.exports = {
  getAll: () => db.Usuario.findAll()
}