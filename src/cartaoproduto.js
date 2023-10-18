import { adicionarAoCarrinho } from "./src/menucarrinho.js";
import { catalogo } from "./src/utilidades.js";
export function renderizarCatalogo(){
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class="border-solid w-48 m-2 flex flex-col p-2 justify-between group shadow-lg shadow-slate-900 rounded-lg ${produtoCatalogo.condominio ? 'condominio':'solta'}" id="card-produto-${produtoCatalogo.id}">
        <img
         class = "group-hover:scale-110 duration=400 rounded-lg"
         src="./assets/img/${produtoCatalogo.arqImg}"
         alt="Imagem não carregada!"
        />
        <p class="text-sm">${produtoCatalogo.nomeProduto}</p>
        <p class="text-sm">${produtoCatalogo.tipoProduto}</p>
        <p class="text-sm">R$ ${produtoCatalogo.preco}</p>
        <button id='adicionar-${produtoCatalogo.id}' class='bg-slate-950 hover:bg-slate-600 text-slate-200'><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;
        
        document.getElementById("container-produto").innerHTML += cartaoProduto;
        
    }

    for (const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', ()=>adicionarAoCarrinho(produtoCatalogo.id));
    }

    
}