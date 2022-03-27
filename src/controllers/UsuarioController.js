const services = require('./services');

module.exports ={

  async create(req, res){

    let {email, apelido} = req.body;
    
    email = await services.verifi({email});
    apelido = await services.verifi({apelido});
    
    
    if(email || apelido){
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

  },

  async findEmail(req,res){
    const {user_id} = req.params;

    const usuario = await services.findUser(user_id);

    if(usuario){
      return res.json(usuario);
    }else{
      res.status(404);
      return res.json({resultado: "Usuario não encontrado."})
    }
  },

  async findNickname(req, res){
    const {apelido} = req.params;

    const usuario = await services.findNick({apelido});

    if(!usuario){
      res.status(404);
      return res.json({resultado: "Usuario não encontrado"});
    }
    
    return res.json({apelido: usuario.apelido, foto:usuario.fotoDePerfil});
  
  }

};