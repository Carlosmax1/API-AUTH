const express = require('express');
const UserController = require('./controllers/UsuarioController');

const routes = express.Router();

routes.post('/usuario', UserController.create);
routes.get('/usuarios', UserController.all_users);

module.exports = routes;