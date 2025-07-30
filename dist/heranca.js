"use strict";
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    emitirSom() {
        console.log("Algum som genérico...");
    }
}
class Cachorro extends Animal {
    emitirSom() {
        console.log("Au Au!!");
    }
}
const dog = new Cachorro("dogzao");
console.log(dog.emitirSom());
