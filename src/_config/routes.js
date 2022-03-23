const authRoutes = require('../features/auth/routes');
const userRoutes = require('../features/user/routes');
const usersRoutes = require('../features/usuarios/routes');
const checkin = require('../features/checkin/routes');
const checkins = require('../features/checkins/routes');

module.exports = router =>{
  authRoutes(router);
  userRoutes(router);
  usersRoutes(router);
  checkin(router);
  checkins(router);
}