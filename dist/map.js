"use strict";
// O que faz: transforma cada item do array, retornando um novo array com os valores modificados.
// Quando usar: quando você quer aplicar uma função a todos os itens de um array, como formatar, converter, etc.
// Estrutura:
// const resultado = array.map((item) => novaFormaDoItem);
const nums = [1, 2, 3, 4, 5];
const numsFormat = nums.map((number) => number * 2);
console.log(nums);
console.log(numsFormat);
