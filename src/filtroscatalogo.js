const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos(){
    const escondidos = Array.from(catalogoProdutos.getElementsByClassName('hidden'));
    for (const produto of escondidos){produto.classList.remove('hidden');}
}

function esconderCondominios(){
    exibirTodos();
    const condominios = Array.from(catalogoProdutos.getElementsByClassName('condominio')); //Array transforma o resultado do from em lista.
    for (const produdo of condominios){produdo.classList.add('hidden');}
}

function esconderSoltas(){
    exibirTodos();
    const soltas = Array.from(catalogoProdutos.getElementsByClassName('solta')); //Array transforma o resultado do from em lista.
    for (const produdo of soltas){produdo.classList.add('hidden');}
}

export function inicializarFiltros(){
    document.getElementById('exibir-solta').addEventListener('click',esconderCondominios);
    document.getElementById('exibir-condominio').addEventListener('click',esconderSoltas);
    document.getElementById('exibir-todos').addEventListener('click',exibirTodos);
}