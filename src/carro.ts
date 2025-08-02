export class Carro {
    private nome: string;
    private ano: number;
    // Atributo estático pertencente à classe. Não importa o objeto, ele sempre terá o msm valor para todos
    public static anoCompra: number = 2023;

    constructor(nome: string, ano: number) {
        this.nome = nome;
        this.ano = ano;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome: string) {
        this.nome = nome;
    }

    getAno() {
        return this.ano;
    }

    setAno(ano: number) {
        this.ano = ano;
    }
}

const ferrari = new Carro("Ferrari", 2020);
const fusca = new Carro("Fusca", 2001);

Carro.anoCompra = 2025;

console.log(ferrari.getNome());
console.log(Carro.anoCompra);

console.log(fusca.getNome());
console.log(Carro.anoCompra);