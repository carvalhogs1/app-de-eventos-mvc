const livereload = require("livereload");
const chokidar = require("chokidar");
const path = require("path");

// Função para habilitar o hot reload
const enableHotReload = (app) => {
  // Crie um servidor livereload que observa mudanças nos diretórios de visualizações e públicos
  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(path.join(__dirname, "views"));
  liveReloadServer.watch(path.join(__dirname, "public"));

  // Middleware para conectar o livereload ao Express
  const connectLivereload = require("connect-livereload");
  app.use(connectLivereload());

  // Use chokidar para observar os arquivos e reiniciar o servidor
  const watcher = chokidar.watch([path.join(__dirname, "views"), path.join(__dirname,
    "public")]);

  // Recarregue o navegador quando um arquivo for alterado
  watcher.on("change", (file) => {
    console.log(`${file} has been changed`);
    liveReloadServer.refresh("/");
  });

  // Recarregue o navegador quando o servidor for reiniciado
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
      console.log("Browser reload triggered");
    }, 100);
  });
};

module.exports = enableHotReload;