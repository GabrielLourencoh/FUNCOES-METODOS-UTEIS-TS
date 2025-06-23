// O que faz: mapeia os itens e "achata" arrays dentro de arrays.
// Quando usar: quando o resultado do map precisa ser um único array plano.
// Estrutura:
// const resultado = array.flatMap((item) => [transformação]);

const frases = ["oi tudo bem", "como vai você"];
const palavras = frases.flatMap((frase) => frase.split(" "))

console.log(palavras);