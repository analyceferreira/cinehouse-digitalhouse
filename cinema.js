//Declaração das variáveis
const catalogo = require('./database/catalogo.json')


//Função Adicionar Filmes ao catálogo
function adicionarFilme(filme) {
    return catalogo.push(filme)
}


//Função Buscar um Filme do catálogo
function buscarFilme (codigo) {
    return busca = catalogo.find(function(valor, index){
        return catalogo[index].codigo == codigo
    })
}


//Função alterar status de em cartaz de um filme do catálogo
function alterarStatusEmCartaz(codigo, functionBuscarFilme) {
    let filme = catalogo[functionBuscarFilme(codigo)].emCartaz

    return filme = !filme
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

function listarFilmesDeLongaDuracao(){
    return catalogo.filter(function(valor, index) {
        return catalogo[index].duracao >= 2
    })
}







