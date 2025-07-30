class ClienteComposicao {
    nome: string;
    cpf: string;

    constructor (nome: string, cpf: string) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class ContaComposicao {
    numero: number;
    agencia: string;
    saldo: number;
    cliente: Cliente;

    constructor(numero: number, agencia: string, saldo: number, nome: string, cpf: string) {
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = saldo;
        this.cliente = new ClienteComposicao(nome, cpf);
    }
}

let contaComposicao: ContaComposicao = new ContaComposicao(123, "001", 0, "Gabriel Lourenço", "12312312322");

console.log(contaComposicao)