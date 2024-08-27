const usuarios = []

function adicionarUsuario(nome, email, senha){
    usuarios.push({
        id: Date.now(),
        nome: nome,
        email: email,
        senha: senha,
        criadoEm: new Date()
    })

    console.log(usuarios)
}

module.exports = {
    adicionarUsuario
}