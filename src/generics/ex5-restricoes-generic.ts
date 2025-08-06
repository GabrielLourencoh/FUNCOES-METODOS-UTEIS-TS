interface Comprimento {
  length: number;
}

// A função agora só aceita tipos que possuem a propriedade 'length'
function logComprimento<T extends Comprimento>(arg: T): T {
  console.log(arg.length); // OK, pois T tem a propriedade length
  return arg;
}

logComprimento("Olá"); // OK, string tem length
logComprimento([1, 2, 3]); // OK, array tem length

// logComprimento(10); // Erro de compilação! number não tem length
// logComprimento({ nome: "João" }); // Erro de compilação! objeto sem length
