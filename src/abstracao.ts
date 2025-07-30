abstract class Veiculo {
    constructor(public nome: string) {}

    abstract ligar(): void;
}

class Carro extends Veiculo {
    ligar(): void {
        console.log(`${this.nome} ligando o motor`);
    }
}

const carro = new Carro("carro");
console.log(carro.ligar());