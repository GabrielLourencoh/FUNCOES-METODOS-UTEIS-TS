"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matematica = void 0;
class Matematica {
    // Métodos estáticos são acessados pela classe e não pelo objeto dessa classe
    // Podendo ter acesso direto à essas classes mesmo sem a necessidade de ter um objeto
    static somar(numero1, numero2) {
        return numero1 + numero2;
    }
    static calcularAreaQuadrado(lado) {
        return lado * lado;
    }
    static calcularAreaCirculo(raio) {
        const area = Matematica.valorPi * raio * raio;
        return area;
    }
    static calcularDobroDaAreaCirculo(raio) {
        const areaDouble = Matematica.calcularAreaCirculo(raio) * 2;
        return areaDouble;
    }
}
exports.Matematica = Matematica;
// Atributos estáticos são pegados diretamente pela classe
Matematica.valorPi = 3.14;
console.log(Matematica.somar(1, 4));
console.log(Matematica.calcularAreaCirculo(4));
console.log(Matematica.calcularAreaQuadrado(5));
console.log(Matematica.calcularDobroDaAreaCirculo(4));
