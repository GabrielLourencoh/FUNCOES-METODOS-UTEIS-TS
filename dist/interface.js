"use strict";
class Sistema {
    login(usuario, senha) {
        return usuario === 'admin' && senha === '123123';
    }
}
const sistema = new Sistema();
console.log(sistema.login("admin", "123123"));
