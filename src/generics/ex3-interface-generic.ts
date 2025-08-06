interface Caixa<T> {
    conteudo: T;
}

let caixaDeNumero: Caixa<number> = {
    conteudo: 123,
}

let caixaDeString: Caixa<string> = {
    conteudo: "Texto",
}

interface Par<K, V> {
    chave: K,
    valor: V,
}

let meuPar: Par<string, number> = {
    chave: "idade",
    valor: 30,
}


console.log(caixaDeNumero);
console.log(caixaDeString);
console.log(meuPar);
