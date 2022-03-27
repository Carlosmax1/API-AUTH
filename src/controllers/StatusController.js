module.exports = {

  async state(req,res){
    return res.json({status: "OK", versao: "0.0.2", dev: "Carlos"})
  }

}