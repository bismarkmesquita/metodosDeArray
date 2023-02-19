const btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdernarPorPreco.addEventListener('click', ordernarPorPreco)

function ordernarPorPreco() {
    let precosOrdenados = livros.sort((a, b) => {
        return a.preco - b.preco
    })
    exibeLivrosNaTela(precosOrdenados)
}
