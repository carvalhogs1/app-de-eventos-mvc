const md5 = require('md5')

const pool = require('../config/banco-de-dados')

const usuarios = []

function adicionarUsuario(nome, email, senha){
    // usuarios.push({
    //id: Date.now(),
    //  nome: nome,
    // email: email,
    //senha: md5(senha),
    //  criadoEm: new Date()
    // })

    // console.log(usuarios)

    const senhaCriptografada = md5(senha)

    // Adicionando um novo usuario no banco de dados
    pool.query(`INSERT INTO usuarios(Nome, email, senha, criadoEm) VALUES ('${nome}', '${email}', '${senhaCriptografada}', NOW())`)
    .then(() => {
        console.log('DEU CERTO')
    })
    .catch(error => {
        console.error('ERRO AO INSERIR DADOS', error)
    })

}

module.exports = {
    adicionarUsuario
}