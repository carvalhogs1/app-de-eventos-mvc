const md5 = require('md5');
const usuarioModel = require('../models/usuarioModel')
 
function exibirPaginaLogin(request, response) {
  response.render('login');
}
 
async function autenticarUsuario(request, response) {
 
  // Pegar as informações do usuário
  const {email, senha} = request.body;
 
  console.log(email, senha);
 
  // Buscar o usuário no banco de dados
  const usuario = await usuarioModel.buscarUsuarioPorEmail(email);
 
  // Caso o usuário não exista, retorna para página de login
  if(usuario === undefined) {
    response.redirect('/');
    return;
  }
 
  console.log('senha digitada', senha);
  console.log('senha do banco', usuario.senha);
 
 
  // Verificar se a senha está correta
  if(md5(senha) !== usuario.senha) {
    response.redirect('/');
    return;
  }
 
  // Salvar o usuário na sessão
  request.session.usuario = usuario;
 
  response.redirect("/eventos");
 
  console.log('Usuário autenticado com sucesso!');
 
  console.log(usuario);
}
 
module.exports = {
  exibirPaginaLogin,
  autenticarUsuario
}