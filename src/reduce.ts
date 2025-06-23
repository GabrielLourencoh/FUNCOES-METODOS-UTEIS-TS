// O que faz: reduz um array a um único valor acumulado.
// Quando usar: quando quiser somar, multiplicar ou transformar todo array em um valor só.
// Estrutura:
// const resultado = array.reduce((acumulador, item) => operação, valorInicial);

const numbersArrayA: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reducaoArrayASoma: number = numbersArrayA.reduce((acumulador, numero) => acumulador + numero, 0);
const reducaoArrayAMult: number = numbersArrayA.reduce((acumulador, numero) => acumulador * numero, 0);
const reducaoArrayASubt: number = numbersArrayA.reduce((acumulador, numero) => acumulador - numero, 0);
const reducaoArrayADiv: number = numbersArrayA.reduce((acumulador, numero) => acumulador / numero, 0);

console.log(`Reduzindo com uma multiplicação: ${reducaoArrayAMult}`);
console.log(`Reduzindo com uma soma: ${reducaoArrayASoma}`);
console.log(`Reduzindo com uma subtração: ${reducaoArrayASubt}`);
console.log(`Reduzindo com uma divisão: ${reducaoArrayADiv}`);
