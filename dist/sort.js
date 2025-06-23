"use strict";
// O que faz: ordena os itens do array (por padrão como strings).
// Quando usar: para ordenar valores, textos ou objetos.
// Estrutura:
// array.sort((a, b) => a - b); // números
// array.sort((a, b) => a.localeCompare(b)); // textos
const numbersOrder = [10, 2, 6];
numbersOrder.sort((a, b) => a - b);
const nomesOrder = [
    "Gabriel", "Ana", "Marcos"
];
nomesOrder.sort();
console.log(numbersOrder);
console.log(nomesOrder);
