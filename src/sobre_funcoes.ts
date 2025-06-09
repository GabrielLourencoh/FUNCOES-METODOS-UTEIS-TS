// Função simples
function saudacao (nome: string) {
    return `Olá, meu nome é ${nome}`;
};

console.log(saudacao("Gabriel"))

// Função com Parâmetros opcionais
function saud(nome?: string){
    if (nome) {
        return `Olá, meu nome é ${nome}`;
    } else {
        return `Olá`;
    }
}
console.log(saud("Gabriel Lourenço"))

// Função com valor padrao
function multiplicar(a: number, b: number = 2): number {
    return a * b;
}
console.log(multiplicar(3))
// ou
console.log(multiplicar(3, 5))

// Função anonima
// É uma função sem nome, geralmente atribuída a uma variável. Muito usada em situações como:
// callbacks (funções passadas como argumento)
// funções mais curtas
// quando você não precisa reaproveitar a função em vários lugares
const somar = (a: number, b: number): number => {
    return a + b;
}
console.log(somar(3, 4));

// Função void (só exibi)
function exibirMensagem(mensagem: string): void {
    console.log(`Mensagem: ${mensagem}`);
}
exibirMensagem("Opa")

// Função que recebe um array
function dobrarNumeros(numeros: number[]): number[] {
    return numeros.map(n => n*2);
}
console.log(dobrarNumeros([1, 3, 5, 6]))