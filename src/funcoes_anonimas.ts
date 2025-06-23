// O que faz: define uma função de forma compacta.
// Quando usar: para funções curtas, especialmente dentro de map, filter, etc.
// Estrutura:
// const funcao = (param1, param2) => { instruções };
const saudacaoNome = (nome: string): string => {
    return `Olá, meu nome é ${nome}`;
}

console.log(saudacaoNome("Gabriel"));

const somarDoisNumbers = (numero1: number, numero2: number): number => {
    return numero1 + numero2;
}

const pegaValor: number = somarDoisNumbers(1, 4);
console.log(`O valor da soma é ${pegaValor}`);
