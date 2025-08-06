"use strict";
function identidade(argumento) {
    return argumento;
}
let saidaNumero = identidade(100); // saidaNumero é do tipo number
let saidaString = identidade("Olá Mundo"); // saidaString é do tipo string
let saidaBoolean = identidade(true); // saidaBoolean é do tipo boolean
// O TypeScript muitas vezes pode inferir o tipo, então você não precisa explicitá-lo:
let saidaInferencia = identidade("Inferido!"); // saidaInferencia é do tipo string
