export class Matematica {
    // Atributos estáticos são pegados diretamente pela classe
    private static valorPi: number = 3.14;

    // Métodos estáticos são acessados pela classe e não pelo objeto dessa classe
    // Podendo ter acesso direto à essas classes mesmo sem a necessidade de ter um objeto
    public static somar(numero1: number, numero2: number): number {
        return numero1 + numero2;
    }

    public static calcularAreaQuadrado(lado: number): number {
        return lado*lado;
    }

    public static calcularAreaCirculo(raio: number): number {
        const area = Matematica.valorPi * raio * raio;
        return area;
    }

    public static calcularDobroDaAreaCirculo(raio: number): number {
        const areaDouble = Matematica.calcularAreaCirculo(raio) * 2;
        return areaDouble;
    }
}

console.log(Matematica.somar(1, 4));
console.log(Matematica.calcularAreaCirculo(4));
console.log(Matematica.calcularAreaQuadrado(5));
console.log(Matematica.calcularDobroDaAreaCirculo(4));