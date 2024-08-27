var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var enableHotReload = require("./hot-reload");

// Importando os controllers
var loginController = require("./controllers/loginController");
var cadastroController = require("./controllers/cadastroController");
var eventoController = require("./controllers/eventoController");


const app = express();

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));

// Habilitar hot-reload
enableHotReload(app);

// Rotas

// Rota para a pagina inicial
app.get("/", loginController.exibirPaginaLogin);

// Rota para a pagina de cadastro
app.get("/criar-conta", cadastroController.exibirPaginaCadastro);

// Rota para criar um novo usuario
app.post("/criar-conta", cadastroController.adicionarUsuario)

// Rota para criar um novo evento
app.post("/criar-evento", eventoController.adicionarEvento)

// Rota para a pagina de lista de evento
app.get("/eventos", eventoController.exibirPaginaEventos);

// Rota para a pagina de criar evento
app.get("/criar-evento", eventoController.exibirPaginaCriarEvento);

// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
