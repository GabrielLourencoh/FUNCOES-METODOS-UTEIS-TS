"use strict";
// O que faz: reduz um array a um único valor acumulado.
// Quando usar: quando quiser somar, multiplicar ou transformar todo array em um valor só.
const valores = [10, 20, 30];
const total = valores.reduce((acc, val) => acc + val, 0);
console.log(total);
// Estrutura
// const resultado = array.reduce((acumulador, item) => operaçãoComAcumulador, valorInicial);
