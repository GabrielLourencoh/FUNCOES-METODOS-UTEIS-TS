"use strict";
// O que faz: transforma cada elemento do array, criando um novo array com os resultados.
// Quando usar: quando quer aplicar uma função em cada item do array.
const names = ['Ana', 'Beto', 'Clara'];
const greetings = names.map(name => `Olá, sou ${name}!`);
console.log(greetings);
// Estrutura
// const novoArray = arrayOriginal.map(item => transformaçãoDoItem);
