export const catalogo = [
    {id: "1",
     nomeProduto: "Casa 1",
     tipoProduto: "Alto Padrão",
     preco: 1350000.00,
     arqImg: "imovel-1.jfif",
     condominio: true},
    {id: "2",
     nomeProduto: "Casa 2",
     tipoProduto: "Alto Padrão",
     preco: 1350000.00,
     arqImg: "imovel-2.jfif",
     condominio: false},
    {id: "3",
    nomeProduto: "Casa 3",
    tipoProduto: "Alto Padrão",
    preco: 1350000.00,
    arqImg: "imovel-3.jfif",
    condominio: true},
    {id: "4",
    nomeProduto: "Casa 4",
    tipoProduto: "Alto Padrão",
    preco: 1350000.00,
    arqImg: "imovel-4.jfif",
    condominio: false},
    {id: "5",
       nomeProduto: "Casa 5",
       tipoProduto: "Alto Padrão",
       preco: 1350000.00,
       arqImg: "imovel-1.jfif",
       condominio: true},
    {id: "6",
       nomeProduto: "Casa 6",
       tipoProduto: "Alto Padrão",
       preco: 1350000.00,
       arqImg: "imovel-2.jfif",
       condominio: false},
       {id: "7",
       nomeProduto: "Casa 1",
       tipoProduto: "Alto Padrão",
       preco: 1350000.00,
       arqImg: "imovel-1.jfif",
       condominio: true},
      {id: "8",
       nomeProduto: "Casa 2",
       tipoProduto: "Alto Padrão",
       preco: 1350000.00,
       arqImg: "imovel-2.jfif",
       condominio: false},
      {id: "9",
      nomeProduto: "Casa 3",
      tipoProduto: "Alto Padrão",
      preco: 1350000.00,
      arqImg: "imovel-3.jfif",
      condominio: true},
      {id: "10",
      nomeProduto: "Casa 4",
      tipoProduto: "Alto Padrão",
      preco: 1350000.00,
      arqImg: "imovel-4.jfif",
      condominio: false},
      {id: "11",
         nomeProduto: "Casa 5",
         tipoProduto: "Alto Padrão",
         preco: 1350000.00,
         arqImg: "imovel-1.jfif",
         condominio: true},
      {id: "12",
         nomeProduto: "Casa 6",
         tipoProduto: "Alto Padrão",
         preco: 1350000.00,
         arqImg: "imovel-2.jfif",
         condominio: false},
         {id: "13",
         nomeProduto: "Casa 3",
         tipoProduto: "Alto Padrão",
         preco: 1350000.00,
         arqImg: "imovel-3.jfif",
         condominio: true},
               ];


export function salvarLocalStorage(chave, informacao){
   localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave){
   return JSON.parse(localStorage.getItem(chave));
}



