"use strict";
// São atalhos de sintaxe para lidar com Promises de forma mais limpa.
// Por que usar async/await?
// Evita .then().catch() aninhados.
// Torna o código assíncrono mais parecido com código síncrono, facilitando a leitura.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function esperar(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve('Passou o tempo'), ms);
    });
}
function executar() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Inicio');
        const resultado = yield esperar(2000);
        console.log(resultado);
        console.log('Fim');
    });
}
executar();
// Você pode usar try/catch em funções async:
function executarComErro() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resposta = yield Promise.reject('Algo deu errado');
            console.log(resposta);
        }
        catch (erro) {
            console.error("Erro capturado: ", erro);
        }
    });
}
executarComErro();
// Funções que retornam Promise
// Em TypeScript, uma função async sempre retorna uma Promise. Mesmo que você retorne um valor direto.
function exemplo() {
    return __awaiter(this, void 0, void 0, function* () {
        return 10; // É o mesmo que: return Promise.resolve(10)
    });
}
exemplo();
// Exemplo com fetch (simulação de API):
function buscarDados() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resposta = yield fetch('https://jsonplaceholder.typicode.com/posts/1');
            const dados = yield resposta.json();
            console.log(dados);
        }
        catch (error) {
            console.log('Erro na API', error);
        }
    });
}
buscarDados();
