function exibirPaginaEventos(request, response) {
  response.render('eventos');
}

function exibirPaginaCriarEvento(request, response) {
  response.render('criarEvento')
}

module.exports = {
  exibirPaginaEventos,
  exibirPaginaCriarEvento
};