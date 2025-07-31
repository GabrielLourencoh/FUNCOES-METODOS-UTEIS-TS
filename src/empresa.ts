export class Empresa {
    // Por padrão, quando não definimos o modificador de acesso do atributo/método, ele é PÚBLICO! Podendo ser alterado e lido a qualquer momento
    nome: string = 'Empresa';

    // Protegido é acessível apenas dentro da própria classe ou subclasses
    protected cnpj: string = '12123123123'

    // Privado é acessível apenas dentro da própria classe
    private senha: string = '123';

    // Readonly tem seu valor estabelecido uma vez e não pode ser modificado após, apenas LIDO
    readonly descricao: string = 'Apenas leitura';

    constructor(nome: string, cnpf: string, senha: string, descricao: string) {
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
        }
    }
}