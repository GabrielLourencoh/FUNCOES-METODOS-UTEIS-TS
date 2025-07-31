"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    constructor(nome, cnpj, senha, descricao) {
        // Protegido é acessível apenas dentro da própria classe ou subclasses
        this.cnpj = '12123123123';
        // Privado é acessível apenas dentro da própria classe
        this.senha = '123';
        // Readonly tem seu valor estabelecido uma vez e não pode ser modificado após, apenas LIDO
        this.descricao = 'Apenas leitura';
        // Por padrão, quando não definimos o modificador de acesso do atributo/método, ele é PÚBLICO! 
        // Podendo ser alterado e lido a qualquer momento
        this.nome = 'Empresa';
        this.nome = nome;
        this.cnpj = cnpj;
        this.senha = senha;
        this.descricao = descricao;
    }
    info() {
        return {
            nome: this.nome,
            cnpj: this.cnpj,
            senha: this.senha,
            descricao: this.descricao,
        };
    }
}
exports.Empresa = Empresa;
// Atributos estáticos só podem ser acessados diretamente pela sua propria classe
// Não podendo ser acessados por instâncias dessa classe
// Os mesmos conceitos de public, protected, private e readonly se aplicam ao static. Mudando seu tipo de acesso
Empresa.nomeClasse = 'People';
// Atributo estático que só pode ser acessado dentro da sua própria classe privado
Empresa.senhaClasse = '123123123';
// Atributo estático que só pode ser acessado dentro da sua própria classe e subclasse por estar protegido
Empresa.cnpjClasse = '123123123';
// Atributo estático que só pode ser lido por estar no modo readonly
Empresa.descricaoClasse = 'descricao-da-classe-estatico';
