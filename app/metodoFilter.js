const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value


    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorQuantidade() : filtrarPorCategoria(categoria)

    exibeLivrosNaTela(livrosFiltrados)

    if (categoria == 'disponivel') {
        const valorTotal = calculaValorDosLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalLivrosDisponiveis(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorQuantidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalLivrosDisponiveis(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <section id="valor_total_livros_disponiveis">
            <div class="livros__disponiveis">
                <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
            </div>
        </section>
    `
}