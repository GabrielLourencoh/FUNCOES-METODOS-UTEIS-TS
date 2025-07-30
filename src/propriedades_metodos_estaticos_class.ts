export class Person {
    // Atributo estatico
    static myName: string = 'Gabriel Lourenço';
    age: number = 16;


    static teste() {
        return 'teste'
    }

    // Isso tbm funciona
    info(): string {
        return `Meu nome é ${Person.myName}`;
    }

    // Isso nao funciona, vc nao pode acessar atributos que não são estaticos dentro de métodos staticos,
    // Mas pode acessar atributos estaticos dentro de métodos normais
    // static info(): string {
    //     return `Meu nome é ${this.myName} e meu nome é ${Person.age}`;
    // }
}

export class User {
    static totalUsersCriados = 0;

    constructor (public nome: string) {
        User.totalUsersCriados++;
    }

    static getTotalCriadas() {
        return User.totalUsersCriados;
    }
}

export class Utils {
    static somar(num1: number, num2: number): number {
        return num1 + num2;
    }
}

export class Product {
    constructor (public nome: string, public preco: number) {}

    static criarProdutoPadrao(): Product {
        return new Product("Produto padrao", 99.99);
    }
}