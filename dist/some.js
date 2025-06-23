"use strict";
// O que faz: verifica se pelo menos um item do array atende a uma condição.
// Quando usar: quando só precisa saber se "existe" pelo menos um item com certa regra.
// Estrutura:
// const existe = array.some((item) => condição);
const numbersVerify = [1, 2, 4, 5, 3];
const temPar = numbersVerify.some((numero) => numero % 2 === 0); // true
if (temPar) {
    console.log('Tem par');
}
else {
    console.log('Não tem par');
}
