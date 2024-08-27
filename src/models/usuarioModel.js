const md5 = require('md5')
const usuarios = []

function adicionarUsuario(nome, email, senha){
    usuarios.push({
        id: Date.now(),
        nome: nome,
        email: email,
        senha: md5(senha),
        criadoEm: new Date()
    })

    console.log(usuarios)
}

module.exports = {
    adicionarUsuario
}