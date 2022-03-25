const services = require('./services');

module.exports = {

  async createCheckin(req,res){

    let {user_id} = req.params;

    const usuario = await services.findUser(user_id)

    if(!usuario){
      res.status(404)
      return res.json({resultado: "Usuário não existe"})
    }

    const {local, image} = req.body;
    user_id = parseInt(user_id);
    const checkin = await services.createCh({user_id,local,image});

    return res.json(checkin);

  },

  async checkins(req,res){

    let {user_id} = req.params;
    user_id = parseInt(user_id);

    const usuario = await services.findUserCh(user_id)

    if(!usuario){
      res.status(404)
      return res.json({resultado: "Usuário não existe"})
    }

    res.json(usuario);
    
  }

}