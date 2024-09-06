const eventoModel = require('../models/eventomodel')

function exibirPaginaEventos(request, response) {

  const eventos = eventoModel.obterEventos();

  response.render('eventos', { eventos });
}

function exibirPaginaCriarEvento(request, response) {
  response.render('criarEvento')
}

function adicionarEvento(request, response) {
  console.log(request.body);


  const {titulo, local, data} = request.body;


  eventoModel.adicionarEvento(titulo, local, data);

  response.redirect("/")
}



module.exports = {
  exibirPaginaEventos,
  exibirPaginaCriarEvento,
  adicionarEvento
};