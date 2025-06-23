"use strict";
// O que faz: verifica se um array contém um determinado valor.
// Quando usar: para checar se um item existe dentro de um array simples.
// Estrutura:
// const existe = array.includes(valorProcurado);
const itens = ['banana', 'maca', 'pera', 'uva'];
const produtoEspecificoDireto = itens.includes('pera'); // true
const produto = 'banana';
if (itens.includes(produto)) {
    console.log('contem o produto: ', produto);
}
else {
    console.log('nao contem o produto ', produto);
}
