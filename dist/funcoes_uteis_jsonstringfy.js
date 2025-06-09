"use strict";
// O que faz: transforma um objeto em texto JSON.
// Quando usar: para salvar ou enviar dados no formato JSON.
const obj = {
    name: 'Gabriel',
    age: 16
};
const jsonStr = JSON.stringify(obj);
console.log(jsonStr);
// Estrutura
// const textoJSON = JSON.stringify(objeto);
