class Animal{
    constructor(public nome: string) {}

    emitirSom(): void {
        console.log("Algum som genérico...");
    }
}

class Cachorro extends Animal {
    emitirSom(): void {
        console.log("Au Au!!");
    }
}

const dog = new Cachorro("dogzao");
console.log(dog.emitirSom());