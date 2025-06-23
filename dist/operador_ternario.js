"use strict";
// O que faz: substitui um if/else simples com uma linha.
// Quando usar: para retornar valores baseados em condição de forma enxuta.
// Estrutura:
// condição ? valorSeVerdadeiro : valorSeFalso;
const idade = 10;
const podeEntrar = idade >= 18 ? 'Sim' : 'Não'; // "Não"
if (podeEntrar === "Sim") {
    console.log(`Voce pode entrar, vc é maior de idade e tem ${idade} anos`);
}
else {
    console.log(`Voce não pode entrar, vc é menor de idade e tem ${idade} anos`);
}
