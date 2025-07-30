import { Person, Product, User, Utils } from "./propriedades_metodos_estaticos_class";

const pessoa = new Person();

// Métodos/atributos estáticos são chamados diretamente pela classe e não pelo objeto

// Chamada de atributo estatico
console.log(Person.myName);

// Chamada de método estático
console.log(Person.teste());

console.log(pessoa.info());

const gabriel: User = new User("Gabriel");
const gabrielle: User = new User("Gabrielle")

console.log(User.getTotalCriadas());

// Podemos modificar atributos static dessa forma:
// User.totalUsersCriados = 10;
// console.log(User.totalUsersCriados);

const resultadoConta = Utils.somar(6, 5);
console.log(resultadoConta);

const produto = new Product("Banana", 5.99);
console.log(produto);

const produtoPadrao = Product.criarProdutoPadrao();
console.log(produtoPadrao);