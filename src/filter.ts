// O que faz: filtra itens de um array com base numa condição, retornando um novo array.
// Quando usar: quando quiser manter apenas os itens que atendem a um critério.
// Estrutura:
// const resultado = array.filter((item) => condiçãoBooleana);

const numerosA: number[] = [1, 2, 3, 4, 5, 6];
const numerosAFormat: number[] = numerosA.filter((numero) => numero % 2 === 0);

console.log('Array normal: ', numerosA);
console.log('Array apenas com numeros divisiveis por 2: ', numerosAFormat);