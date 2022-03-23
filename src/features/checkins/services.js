const db = require('../../_db/models');

module.exports = {
  findUser: id => db.Usuario.findByPk(id, {
    include: {association: "Checkins"}
  })
}