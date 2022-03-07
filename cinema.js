//Declaração das variáveis
let cinema = 'CineHouse';
let catalogo = [{
    codigo : 001,
    titulo: 'Jogos Vorazes',
    duracao: 2,
    atores: ['Jennifer Lawrence, Josh Hutcherson'],
    anoLancamento : 2009,
    emCartaz : false 
},
{
    codigo : 002,
    titulo: 'Jogos Vorazes: Em Chamas',
    duracao: 2,
    atores: ['Jennifer Lawrence, Josh Hutcherson'],
    anoLancamento : 2013,
    emCartaz : false
}
]


//Função Adicionar Filmes ao catálogo
function adicionarFilme(codigo, titulo, duracao, atores, anoLancamento, emCartaz) {
    return catalogo.push({
        codigo: codigo,
        titulo: titulo,
        duracao: duracao,
        atores: atores,
        anoLancamento: anoLancamento,
        emCartaz: emCartaz
    })
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
function alterarStatusEmCartaz(codigo, novoStatusEmCartaz) {
    catalogo[buscarFilme(codigo)].emCartaz = novoStatusEmCartaz    
}


//Função mostrar atributos de um filme do catálogo no console de forma mais completa 
function printarFilm(posicaoFilme) {
    console.log(`    Filme: ${catalogo[posicaoFilme].titulo}
    Duração: ${catalogo[posicaoFilme].duracao}h
    Atores principais: ${catalogo[posicaoFilme].atores}
    Ano de Lançamento: ${catalogo[posicaoFilme].anoLancamento}
    Em cartaz: ${catalogo[posicaoFilme].emCartaz}`)
}

