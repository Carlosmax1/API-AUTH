const services = require('./services');

module.exports ={

  async create(req, res){

    const {body} = req;
    const usuario = await services.create(body);

    return res.json(usuario);
  },

  async all_users(req, res){
    
    const usuarios = await services.findAll();

    if(usuarios.length == 0){
      return res.json({resultado: "Não existe usuários criados"});
    }
    
    return res.json(usuarios);

  }

};