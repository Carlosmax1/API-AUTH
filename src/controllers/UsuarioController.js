const services = require('./services');

module.exports ={

  async create(req, res){

    let {email} = req.body;
    email = await services.verifi({email});
    
    if(email){
      res.status(401);
      return res.json({resultado: "Usuario já existe"});
    }

    const usuario = await services.create(req.body);

    return res.json(usuario);
  },

  async all_users(req, res){
    
    const usuarios = await services.findAll();

    if(usuarios.length == 0){
      res.status(400)
      return res.json({resultado: "Não existe usuários criados"});
    }
    
    return res.json(usuarios);

  }

};