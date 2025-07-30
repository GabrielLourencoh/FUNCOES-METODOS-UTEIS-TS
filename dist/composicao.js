"use strict";
class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}
class Conta {
    constructor(numero, agencia, saldo, cliente) {
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = saldo;
        this.cliente = cliente;
    }
}
let clienteGabriel = new Cliente("Gabriel Lourenço", "12312312322");
let conta = new Conta(123, "001", 0, clienteGabriel);
console.log(conta);
console.log("Nome do Cliente: ", conta.cliente.nome);
