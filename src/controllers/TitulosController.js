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

    // return res.json(nome);

    const [titulo] = await services.createT(nome)

    await usuario.addTitulos(titulo);

    return res.json(titulo);
  }

}