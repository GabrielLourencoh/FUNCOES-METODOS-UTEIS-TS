export class Pessoa {
    nome: string;
    anoNascimento: number;

    constructor (nome: string, anoNascimento: number) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    }

    apresentarSe() {
        console.log(`Olá, meu nome é ${this.nome} e nasci no ano de ${this.anoNascimento}`)
    }
}