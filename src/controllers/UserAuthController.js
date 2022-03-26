const services =require('./services');
const jwt = require('jsonwebtoken');

module.exports = {

  async auth(req,res){

    const{email,senha} = req.body;

    if(email && senha){
      const usuario = await services.auth({email,senha});
      if(!usuario){
        res.status(401);
        return res.json({resultado: "Não existe esse usuario"})
      }else{
        res.status(200);
        const resultBody = jwt.sign({email: usuario.email, nome: usuario.nome, id: usuario.id}, 'meusegredo');
        res.json({token: resultBody});
      }
    }else{
      res.status(401);
      return res.json({resultado: "Erro"})
    }

  }


}