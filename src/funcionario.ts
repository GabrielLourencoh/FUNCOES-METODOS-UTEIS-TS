import { Pessoa } from './pessoa';

export class Funcionario extends Pessoa {
    cargo: string;

    constructor (nome:string, anoNascimento: number, cargo: string) {
        super(nome, anoNascimento);
        this.cargo = cargo;
    }

    funcionarioApresentar () {
        console.log(`Meu nome é ${this.nome} e eu sou um funcionario nascido em ${this.anoNascimento}`)
    }
}