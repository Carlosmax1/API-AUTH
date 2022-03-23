const Validator = require('fastest-validator')
const services = require('./services');

module.exports = {
  create: async ctx =>{
    const {request, response} = ctx;
    let {user_id}  = request.params;
    user_id = parseInt(user_id);
    const usuario = await services.findUser(user_id);

    if(!usuario){
      response.status = 400;
      return response.body = {erro: "Usuário não existe."};
    }

    if(usuario.Checkins.length == 0){
      response.status = 400;
      return response.body = {resultado: "O usuário não possue nenhum checkin"}
    }

    const checkins = usuario.Checkins;

    response.body = checkins;
  }
}