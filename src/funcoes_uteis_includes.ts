// O que faz: verifica se um valor existe dentro de um array ou string.
// Quando usar: quando quiser saber se tem um elemento específico.

const cores: string[] = ['verde', 'amarelo', 'roxo', 'vermelho'];
console.log(cores.includes('verde')) // true
console.log(cores.includes('rosa')) // false

// Estrutura
// const existe = array.includes(valor);