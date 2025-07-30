class Cliente {
    nome: string;
    cpf: string;

    constructor (nome: string, cpf: string) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Conta {
    numero: number;
    agencia: string;
    saldo: number;
    cliente: Cliente;

    constructor(numero: number, agencia: string, saldo: number, cliente: Cliente) {
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = saldo;
        this.cliente = cliente
    }
}

let clienteGabriel: Cliente = new Cliente("Gabriel Lourenço", "12312312322");
let conta: Conta = new Conta(123, "001", 0, clienteGabriel);

console.log(conta)
console.log("Nome do Cliente: ", conta.cliente.nome);