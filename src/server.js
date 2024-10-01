const express = require("express");
const path = require("path");
const enableHotReload = require("./hot-reload");
const app = express();
const bodyParser = require('body-parser');
const session = reuqire('express-session');
const autenticarMiddleware = require("./middlewares/autenticar");
 
const loginController = require("./controllers/loginController")
const cadastroController = require("./controllers/cadastroController")
const eventoController = require("./controllers/eventoController")
 
// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: true }));
 
// Configurando o body - parser
app.use(bodyParser.urlencoded({ extended: false }))
 
 
// Configurações do seu app Express
 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
console.log("Views path set to:", path.join(__dirname, "views"));
 
// Configuração de pasta pública
 
app.use(express.static(path.join(__dirname, "public")));
console.log("Static files path set to:", path.join(__dirname, "public"));
 
// Configuração do express-session
app.use(session({
    secret: "chave-super-secreta",
    resave: false,
    saveUninitialized: false,
}));
 
// Habilitar hot-reload
 
enableHotReload(app);
 
//Rota para página de login
app.get("/", loginController.exibirPaginaDeLogin);
 
//Rota para autenticar usuario
app.post("/autenticar", loginController.autenticarUsuario);
 
//Rota para página de cadastro
app.get("/criarconta", cadastroController.exibirPaginaDeCadastro);
 
//Rota para criar um novo usuario
app.post("/novousuario", cadastroController.adicionarUsuario);
 
//Rota para página da listagem de eventos
app.get("/eventos", autenticarMiddleware.protegerRotaUsuario, eventoController.exibirPaginaEventos);
 
//Rota para página de criar um novo evento
app.get("/criar-evento", autenticarMiddleware.protegerRotaAdmin,  eventoController.exibirPaginaCriarEvento);
 
//Rota para criar um novo evento
app.get("/criar-evento", autenticarMiddleware.protegerRotaAdmin,  eventoController.exibirPaginaCriarEvento);
 
// Inicie o servidor
const port = 3000;
app.listen(port, () => { console.log(`Servidor rodando em http://localhost:${port}`); });