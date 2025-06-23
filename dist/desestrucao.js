"use strict";
// O que faz: extrai valores de objetos ou arrays em variáveis separadas.
// Quando usar: quando quiser acessar rapidamente os dados de um objeto ou array.
// Estrutura:
// const { chave } = objeto;
// const [item1, item2] = array;
const pessoa = {
    nome: "Gabriel",
    idade: 15
};
const { nome } = pessoa;
const numeros = [10, 20];
const [a, b] = numeros;
console.log(nome);
console.log(a, b);
