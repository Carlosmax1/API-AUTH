const controllers = require('./controllers');

module.exports = router =>{
  router.post('/v1/api/:user_id/checkin', controllers.create);
}