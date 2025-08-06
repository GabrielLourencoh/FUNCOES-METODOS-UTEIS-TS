"use strict";
class Fila {
    constructor() {
        this.elementos = [];
    }
    adicionar(elemento) {
        this.elementos.push(elemento);
    }
    remover() {
        return this.elementos.shift();
    }
}
let filaDeNumeros = new Fila();
filaDeNumeros.adicionar(10);
filaDeNumeros.adicionar(20);
console.log(filaDeNumeros.remover()); // 10
let filaDeStrings = new Fila();
filaDeStrings.adicionar("primeiro");
filaDeStrings.adicionar("segundo");
console.log(filaDeStrings.remover()); // "primeiro"
