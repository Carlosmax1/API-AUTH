const Validator = require('fastest-validator')
const services = require('./services');
const usuarios = require('../../_db/models/usuario');
const Boom = require('boom');

const v = new Validator();

module.exports = {
  create: async ctx =>{
    const {request, response} = ctx;
    let {user_id}  = request.params;
    console.log(user_id);
    const usuario = await services.findUser(user_id);

    if(!usuario){
      response.status = 400;
      return response.body = {erro: "Usuário não existe."};
    }

    const {data, local} = request.body;
    user_id = parseInt(user_id);


    const checkin = await services.create({user_id,data,local});

    response.body = checkin;
  }
}