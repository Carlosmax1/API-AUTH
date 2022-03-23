const controllers = require('./controllers');

module.exports = router =>{
  router.get('/v1/api/:user_id/checkins', controllers.create);
}