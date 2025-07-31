"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    constructor(nome, cnpf, senha, descricao) {
        // Por padrão, quando não definimos o modificador de acesso do atributo/método, ele é PÚBLICO! 
        // Podendo ser alterado e lido a qualquer momento
        this.nome = 'Empresa';
        // Protegido é acessível apenas dentro da própria classe ou subclasses
        this.cnpj = '12123123123';
        // Privado é acessível apenas dentro da própria classe
        this.senha = '123';
        // Readonly tem seu valor estabelecido uma vez e não pode ser modificado após, apenas LIDO
        this.descricao = 'Apenas leitura';
        this.nome = nome;
        this.cnpj = cnpf;
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
