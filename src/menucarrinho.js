import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};


function abrirCarrinho() {
    document.getElementById("carrinho").classList.remove("right-[-360px]");
    document.getElementById("carrinho").classList.add("right-[0px]");
}

function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-360px]");
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById('fechar-carrinho');
    const botaoAbrirCarrinho = document.getElementById('abrir-carrinho');
    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

function incrementarQuantidadeProduto(idProduto){
    idsProdutoCarrinhoComQuantidade[idProduto]++;
    atualizarPrecoCarrinho();
    atualizarInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto){
    if(idsProdutoCarrinhoComQuantidade[idProduto] === 1){
        removerDoCarrinho(idProduto);
        return;
    }
    idsProdutoCarrinhoComQuantidade[idProduto]--;
    atualizarPrecoCarrinho();
    atualizarInformacaoQuantidade(idProduto);
}

function atualizarInformacaoQuantidade(idProduto){
    document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
}

function removerDoCarrinho(idProduto) {
    delete idsProdutoCarrinhoComQuantidade[idProduto];
    atualizarPrecoCarrinho();
    renderizarProdutosCarrinho();
}

function desenharProdutoNoCarrinho(idProduto){
    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
    const elementoArticle = document.createElement('article'); //<article></article>
    const articleClasses = ['flex', 'bg-slate-100', 'rounded-lg', 'p-2', 'relative'];
    for (const articleClass of articleClasses){
        elementoArticle.classList.add(articleClass);
    };
    const cartaoProdutoCarrinho = //`           <article class="flex bg-slate-100 rounded-lg p-2 relative">
    `<button id="remover-item-${produto.id}" class="absolute top-0 right-2"><i class="fa-solid fa-eraser hover:text-slate-800"></i></button>
    <img src="./assets/img/${produto.arqImg}" 
    alt="Carregando : ${produto.nomeProduto}"
    class="h-24 rounded-lg">
    <div class="px-1 py-2">
        <p class="text-slate-900 text-sm">${produto.nomeProduto}</p>
        <p class="text-slate-900 text-sm">${produto.tipoProduto}</p>
        <p class="text-slate-900 text-sm">R$${produto.preco}</p>
    </div>
    <div class="flex items-end absolute bottom-0 right-2 text-lg">
       <button id='decrementar-produto-${produto.id}'>-</button>
       <p id='quantidade-${produto.id}' class='ml-2'>${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
       <button id='incrementar-produto-${produto.id}' class='ml-2'>+</button>
    </div>`;

//</article>`;

elementoArticle.innerHTML = cartaoProdutoCarrinho;

//containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
containerProdutosCarrinho.appendChild(elementoArticle);

document.getElementById(`decrementar-produto-${produto.id}`).addEventListener('click', () => decrementarQuantidadeProduto(produto.id));
document.getElementById(`incrementar-produto-${produto.id}`).addEventListener('click', () => incrementarQuantidadeProduto(produto.id));
document.getElementById(`remover-item-${produto.id}`).addEventListener('click', () => removerDoCarrinho(produto.id));

}

export function renderizarProdutosCarrinho(){
    const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
    containerProdutosCarrinho.innerHTML = "";
    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
        desenharProdutoNoCarrinho(idProduto);
    }

}


export function adicionarAoCarrinho(idProduto) {
    if (idProduto in idsProdutoCarrinhoComQuantidade){
        incrementarQuantidadeProduto(idProduto);
        return;
    }
    idsProdutoCarrinhoComQuantidade[idProduto] = 1;
    salvarLocalStorage('carrinho',idsProdutoCarrinhoComQuantidade);
    desenharProdutoNoCarrinho(idProduto);
    atualizarPrecoCarrinho();
}

export function atualizarPrecoCarrinho(){
    const precoCarrinho = document.getElementById('preco-total');
    let precoTotalCarrinho = 0;
    for(const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade){
        precoTotalCarrinho += catalogo.find((p) => p.id === idProdutoNoCarrinho).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
    }
    precoCarrinho.innerText = `Total: R$ ${precoTotalCarrinho}`;
}