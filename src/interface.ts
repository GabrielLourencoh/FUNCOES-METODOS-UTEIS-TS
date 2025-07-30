interface Autenticavel {
    login (usuario: string, senha: string): boolean;
}

class Sistema implements Autenticavel {
    login(usuario: string, senha: string): boolean {
        return usuario === 'admin' && senha === '123123';
    }
}

const sistema = new Sistema();
console.log(sistema.login("admin", "123123"));