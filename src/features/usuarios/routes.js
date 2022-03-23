const controllers = require('./controllers');

module.exports = router =>{
  router.get('/v1/api/users', controllers.getAll);
}