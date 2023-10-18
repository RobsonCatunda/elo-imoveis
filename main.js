import { renderizarCatalogo } from "./src/cartaoproduto.js";
import { inicializarFiltros } from "./src/filtroscatalogo.js";
import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutosCarrinho } from "./src/menucarrinho.js";


renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();

