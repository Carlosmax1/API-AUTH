const services = require('./services');

module.exports ={

  async create(req, res){

    const {body} = req;
    const usuario = await services.create(body);

    return res.json(usuario);
  }

};