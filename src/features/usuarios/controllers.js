const services = require('./services');
const Boom = require('boom')

module.exports = {
  getAll: async ctx => {
    const { request, response } = ctx;
    console.log(request);
    const usuarios = await services.getAll();
    if (usuarios.length > 0) {
      response.body = usuarios
    } else {
      response.body = { result: Boom.badData(), erro: "Não existe usuarios criados"};
    }
  }
}