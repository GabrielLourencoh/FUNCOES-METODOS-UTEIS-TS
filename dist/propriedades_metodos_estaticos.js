"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    info() {
        return `Meu nome é`;
    }
}
exports.Person = Person;
Person.myName = 'Opa, estou testando';
const pessoa = new Person();
console.log(Person.myName);
