//Declaração das variáveis
const catalogo = require('./database/catalogo.json')


//Função Adicionar Filmes ao catálogo
function adicionarFilme(filme) {
    return catalogo.push(filme)
}


//Função Buscar um Filme do catálogo
function buscarFilme (codigo) {
    let  posicaoFilme;
    for (let i = 0; i< catalogo.length; i++) {
        if (catalogo[i].codigo == codigo) {
            return posicaoFilme = i
        }
    }
}


//Função alterar status de em cartaz de um filme do catálogo
function alterarStatusEmCartaz(codigo) {
    return catalogo[buscarFilme(codigo)].emCartaz == true ? catalogo[buscarFilme(codigo)].emCartaz = !catalogo[buscarFilme(codigo)].emCartaz : catalogo[buscarFilme(codigo)].emCartaz = !catalogo[buscarFilme(codigo)].emCartaz
}


//Função mostrar atributos de um filme do catálogo no console de forma mais completa 
function printarFilme(posicaoFilme) {
    let statusEmCartaz = ""

    if (posicaoFilme != undefined) {
        if (catalogo[posicaoFilme].emCartaz == true){
            statusEmCartaz = "Sim"
        }
        else {
            statusEmCartaz = "Não"
        }
    
        return console.log(`        Código: ${catalogo[posicaoFilme].codigo} 
        Filme: ${catalogo[posicaoFilme].titulo}
        Duração: ${catalogo[posicaoFilme].duracao}h
        Atores principais: ${catalogo[posicaoFilme].atores}
        Ano de Lançamento: ${catalogo[posicaoFilme].anoLancamento}
        Em cartaz: ${statusEmCartaz}`)
    }
    else {
        return console.log('Desculpe, filme não encontrado no catálogo')
    }

}


//Função listar todos os filmes do catálogo
function listarTodosOsFilmes() {
    for (let i = 0; i<catalogo.length; i++){
        printarFilme(i)
        console.log(`
        `)
    }
}


//Função listar todos os filmes em cartaz do catálogo
function listarFilmesEmCartaz() {
    for (let i = 0; i<catalogo.length; i++){
        catalogo[i].emCartaz == true ? printarFilme(i) : ""
    
        console.log("")
    }
}




