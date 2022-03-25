const services = require('./services');

module.exports = {

  async createT(req, res){
    let {user_id} = req.params;
    let {nome} = req.body;

    const usuario = await services.findUser(user_id)

    if(!usuario){
      res.status(404)
      return res.json({resultado: "Usuário não existe"})
    }

    //return res.json(nome);

    const [titulo] = await services.createT(nome)

    //return res.json(titulo);

    await usuario.addTitulos(titulo);

    return res.json(titulo);
  },

  async allT(req,res){
    let {user_id} = req.params;
    user_id = parseInt(user_id);

    const titulos = await services.findAllT(user_id)

    return res.json(titulos);
  }

}