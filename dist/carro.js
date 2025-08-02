"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getAno() {
        return this.ano;
    }
    setAno(ano) {
        this.ano = ano;
    }
}
exports.Carro = Carro;
// Atributo estático pertencente à classe. Não importa o objeto, ele sempre terá o msm valor para todos
Carro.anoCompra = 2023;
const ferrari = new Carro("Ferrari", 2020);
const fusca = new Carro("Fusca", 2001);
Carro.anoCompra = 2025;
console.log(ferrari.getNome());
console.log(Carro.anoCompra);
console.log(fusca.getNome());
console.log(Carro.anoCompra);
