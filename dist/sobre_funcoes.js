"use strict";
// Função simples
function saudacao(nome) {
    return `Olá, meu nome é ${nome}`;
}
;
console.log(saudacao("Gabriel"));
// Função com Parâmetros opcionais
function saud(nome) {
    if (nome) {
        return `Olá, meu nome é ${nome}`;
    }
    else {
        return `Olá`;
    }
}
console.log(saud("Gabriel Lourenço"));
// Função com valor padrao
function multiplicar(a, b = 2) {
    return a * b;
}
console.log(multiplicar(3));
// ou
console.log(multiplicar(3, 5));
// Função anonima
// É uma função sem nome, geralmente atribuída a uma variável. Muito usada em situações como:
// callbacks (funções passadas como argumento)
// funções mais curtas
// quando você não precisa reaproveitar a função em vários lugares
const somar = (a, b) => {
    return a + b;
};
console.log(somar(3, 4));
// Função void (só exibi)
function exibirMensagem(mensagem) {
    console.log(`Mensagem: ${mensagem}`);
}
exibirMensagem("Opa");
// Função que recebe um array
function dobrarNumeros(numeros) {
    return numeros.map(n => n * 2);
}
console.log(dobrarNumeros([1, 3, 5, 6]));
