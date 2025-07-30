"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.Utils = exports.User = exports.Person = void 0;
class Person {
    constructor() {
        this.age = 16;
        // Isso nao funciona, vc nao pode acessar atributos que não são estaticos dentro de métodos staticos,
        // Mas pode acessar atributos estaticos dentro de métodos normais
        // static info(): string {
        //     return `Meu nome é ${this.myName} e meu nome é ${Person.age}`;
        // }
    }
    static teste() {
        return 'teste';
    }
    // Isso tbm funciona
    info() {
        return `Meu nome é ${Person.myName}`;
    }
}
exports.Person = Person;
// Atributo estatico
Person.myName = 'Gabriel Lourenço';
class User {
    constructor(nome) {
        this.nome = nome;
        User.totalUsersCriados++;
    }
    static getTotalCriadas() {
        return User.totalUsersCriados;
    }
}
exports.User = User;
User.totalUsersCriados = 0;
class Utils {
    static somar(num1, num2) {
        return num1 + num2;
    }
}
exports.Utils = Utils;
class Product {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    static criarProdutoPadrao() {
        return new Product("Produto padrao", 99.99);
    }
}
exports.Product = Product;
