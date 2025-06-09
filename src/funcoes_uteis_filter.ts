// O que faz: filtra elementos de um array que passam numa condição.
// Quando usar: quando quiser criar um novo array com só alguns itens que atendem um critério.

const numbers = [1, 2, 3, 4, 5];
const pares = numbers.filter(num => num % 2 === 0);
console.log(pares);

// Estrutura
// const novoArray = arrayOriginal.filter(item => condiçãoQueRetornaTrueOuFalse);

