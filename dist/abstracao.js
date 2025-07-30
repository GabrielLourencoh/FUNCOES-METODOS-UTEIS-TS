"use strict";
class Veiculo {
    constructor(nome) {
        this.nome = nome;
    }
}
class Carro extends Veiculo {
    ligar() {
        console.log(`${this.nome} ligando o motor`);
    }
}
const carro = new Carro("carro");
console.log(carro.ligar());
