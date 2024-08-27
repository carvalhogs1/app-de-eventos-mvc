const eventos =  []

function adicionarEvento(titulo, local, data){
    eventos.push({
        id: Date.now(),
        titulo: titulo,
        local: local,
        data: data,
        criadoEm: new Date()
    })

    console.log(eventos)
}

module.exports = {
    adicionarEvento
}