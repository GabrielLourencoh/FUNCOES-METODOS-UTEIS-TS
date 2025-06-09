"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const pessoa_1 = require("./pessoa");
class Funcionario extends pessoa_1.Pessoa {
    constructor(nome, anoNascimento, cargo) {
        super(nome, anoNascimento);
        this.cargo = cargo;
    }
    funcionarioApresentar() {
        console.log(`Meu nome é ${this.nome} e eu sou um funcionario nascido em ${this.anoNascimento}`);
    }
}
exports.Funcionario = Funcionario;
