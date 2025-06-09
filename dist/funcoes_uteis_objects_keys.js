"use strict";
// O que faz: pega todas as chaves (propriedades) de um objeto e retorna num array.
// Quando usar: quando quiser listar os nomes das propriedades de um objeto.
const usuario = {
    name: 'Gabriel',
    age: 20
};
const chaves = Object.keys(usuario);
console.log(chaves);
// Estrutura
// const chaves = Object.keys(objeto);
