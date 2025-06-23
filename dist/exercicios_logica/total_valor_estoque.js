"use strict";
// Total do Valor em Estoque
// Você tem uma lista de produtos com:
// nome
// preco
// quantidade (em estoque)
// const estoque = [
//   { nome: "Notebook", preco: 3000, quantidade: 2 },
//   { nome: "Mouse", preco: 100, quantidade: 5 },
//   { nome: "Teclado", preco: 200, quantidade: 3 },
//   { nome: "Monitor", preco: 900, quantidade: 1 },
//   { nome: "Cabo HDMI", preco: 50, quantidade: 10 }
// ];
// Objetivo:
// Calcular o valor total de cada produto no estoque (preco * quantidade).
// Somar tudo e obter o valor total do estoque geral.
// Exibir o resultado final.
const estoque = [
    { nome: "Notebook", preco: 3000, quantidade: 2 },
    { nome: "Mouse", preco: 100, quantidade: 5 },
    { nome: "Teclado", preco: 200, quantidade: 3 },
    { nome: "Monitor", preco: 900, quantidade: 1 },
    { nome: "Cabo HDMI", preco: 50, quantidade: 10 }
];
const estoquePrecoTotal = estoque.map((produto) => ({
    precoTotal: produto.preco * produto.quantidade
}));
const somaTodosProdutos = estoquePrecoTotal.reduce((acumulador, produto) => {
    return acumulador + produto.precoTotal;
}, 0);
console.log(`A soma dos produtos é ${somaTodosProdutos}`);
