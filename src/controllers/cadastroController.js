const usuarioModel = require('../models/usuarioModel')

function exibirPaginaCadastro(request, response) {
  response.render('cadastro');
}

function adicionarUsuario(request, response) {
  console.log(request.body);


  const {nome, email, senha} = request.body;


  usuarioModel.adicionarUsuario(nome, email, senha);

  response.redirect("/")
}


module.exports = {
  exibirPaginaCadastro,
  adicionarUsuario
}