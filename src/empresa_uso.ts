import { Empresa } from "./empresa";

const e = new Empresa("Empresa", "123123123123", "senha", "Descricao");

console.log(`Informações da Empresa: `, e.info());

// Inválido! 'nomeClasse' é um atributo estático, só pode ser acessado diretamente pela classe
// e.nomeClasse();
// Dessa forma:
const nomeClasse = Empresa.nomeClasse;
console.log(nomeClasse);


// O atributo nome pode ser alterado porque é um atributo público
// e.nome= "Empresa foi alterada";

// Isso não é possivel porque o atributo "cnpj" é protegido, só podendo ser modificado dentro da própria classe
// e.cnpj = "12312313";

// Isso não é possível porque o atributo 'senha' é privado, só podendo ser modificado dentro da própria classe
// e.senha = "senha-nova";

// Isso não é possível porque o atributo 'descricao' é readonly, só podendo ser definido UMA só vez. Após isso, pode ser apenas lido.
// e.descricao = "descricao-nova-da-empresa";

