"use strict";
class ClienteComposicao {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}
class ContaComposicao {
    constructor(numero, agencia, saldo, nome, cpf) {
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = saldo;
        this.cliente = new ClienteComposicao(nome, cpf);
    }
}
let contaComposicao = new ContaComposicao(123, "001", 0, "Gabriel Lourenço", "12312312322");
console.log(contaComposicao);
