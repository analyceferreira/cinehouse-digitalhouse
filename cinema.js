//Declaração das variáveis
let cinema = 'CineHouse';
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
            posicaoFilme = i
        }
    }
    //Validação de dados: Caso o código digitado não pertença a nenhum filme do catálogo print uma mensagem informando o erro
    if (posicaoFilme != undefined) {
        return posicaoFilme;
    }
    else {
        return console.log('Desculpe, filme não encontrado no catálogo')
    }
}


//Função alterar status de em cartaz de um filme do catálogo
function alterarStatusEmCartaz(codigo) {
    return catalogo[buscarFilme(codigo)].emCartaz == true ? !catalogo[buscarFilme(codigo)].emCartaz : !catalogo[buscarFilme(codigo)].emCartaz
}


//Função mostrar atributos de um filme do catálogo no console de forma mais completa 
function printarFilme(posicaoFilme) {
    let statusEmCartaz = ""
    if (catalogo[posicaoFilme].emCartaz == true){
        statusEmCartaz = "Sim"
    }
    else {
        statusEmCartaz = "Não"
    }

    console.log(`    Filme: ${catalogo[posicaoFilme].titulo}
    Duração: ${catalogo[posicaoFilme].duracao}h
    Atores principais: ${catalogo[posicaoFilme].atores}
    Ano de Lançamento: ${catalogo[posicaoFilme].anoLancamento}
    Em cartaz: ${statusEmCartaz}`)
    console.log(statusEmCartaz)
}





