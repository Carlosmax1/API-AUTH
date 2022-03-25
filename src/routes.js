const express = require('express');
const UserController = require('./controllers/UsuarioController');
const CheckinsController = require('./controllers/CheckinsController');
const TitulosController = require('./controllers/TitulosController');

const routes = express.Router();

routes.post('/usuario', UserController.create);
routes.get('/usuarios', UserController.all_users);

routes.post('/:user_id/checkin', CheckinsController.createCheckin);
routes.get('/:user_id/checkins', CheckinsController.checkins);

routes.post('/:user_id/titulo', TitulosController.createT);
routes.get('/:user_id/titulo/all', TitulosController.allT);

module.exports = routes;