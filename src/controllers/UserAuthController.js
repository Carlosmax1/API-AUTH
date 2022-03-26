const services =require('./services');

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
        return res.json({resultado: "Autenticado com sucesso!!"});
      }
    }else{
      res.status(401);
      return res.json({resultado: "Erro"})
    }

  }


}