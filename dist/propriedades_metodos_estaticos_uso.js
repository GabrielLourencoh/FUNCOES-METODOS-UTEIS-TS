"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const propriedades_metodos_estaticos_class_1 = require("./propriedades_metodos_estaticos_class");
const pessoa = new propriedades_metodos_estaticos_class_1.Person();
// Métodos/atributos estáticos são chamados diretamente pela classe e não pelo objeto
// Chamada de atributo estatico
console.log(propriedades_metodos_estaticos_class_1.Person.myName);
// Chamada de método estático
console.log(propriedades_metodos_estaticos_class_1.Person.teste());
console.log(pessoa.info());
const gabriel = new propriedades_metodos_estaticos_class_1.User("Gabriel");
const gabrielle = new propriedades_metodos_estaticos_class_1.User("Gabrielle");
console.log(propriedades_metodos_estaticos_class_1.User.getTotalCriadas());
// Podemos modificar atributos static dessa forma:
// User.totalUsersCriados = 10;
// console.log(User.totalUsersCriados);
const resultadoConta = propriedades_metodos_estaticos_class_1.Utils.somar(6, 5);
console.log(resultadoConta);
const produto = new propriedades_metodos_estaticos_class_1.Product("Banana", 5.99);
console.log(produto);
const produtoPadrao = propriedades_metodos_estaticos_class_1.Product.criarProdutoPadrao();
console.log(produtoPadrao);
