"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, anoNascimento) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    }
    apresentarSe() {
        console.log(`Olá, meu nome é ${this.nome} e nasci no ano de ${this.anoNascimento}`);
    }
}
exports.Pessoa = Pessoa;
