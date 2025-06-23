// Estoque de Produtos com Desconto
// Você tem uma lista de produtos com nome, preço e se está em promoção:

// const produtos = [
//   { nome: "Notebook", preco: 3000, promocao: true },
//   { nome: "Mouse", preco: 100, promocao: false },
//   { nome: "Teclado", preco: 200, promocao: true },
//   { nome: "Monitor", preco: 900, promocao: true },
//   { nome: "Cabo HDMI", preco: 50, promocao: false }
// ];
// -Objetivo:
// Filtrar os produtos que estão em promoção.

// Aplicar um desconto de 10% no preço desses produtos.

// Gerar um novo array com nome e novo preço dos produtos com desconto.

// Exibir esse novo array.

const produtos = [
  { nome: "Notebook", preco: 3000, promocao: true },
  { nome: "Mouse", preco: 100, promocao: false },
  { nome: "Teclado", preco: 200, promocao: true },
  { nome: "Monitor", preco: 900, promocao: true },
  { nome: "Cabo HDMI", preco: 50, promocao: false }
];

const produtosPromocao = produtos.filter((produto) => produto.promocao).map((produto) => ({
    nome: produto.nome,
    preco: produto.preco * 0.9
}));

console.log('Produtos em promoção: ')
console.log(produtosPromocao)

// Ou dessa forma:
// const produtosPromocao = produtos.filter((produto) => produto.promocao);
// for (let i = 0; i < produtosPromocao.length; i++) {
//     const produto = produtosPromocao[i];
//     const valorDesconto = produto.preco * 0.10;
//     produto.preco = produto.preco - valorDesconto;
// }
// console.log('Produtos em promoção: ')
// console.log(produtosPromocao);

