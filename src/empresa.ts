export class Empresa {
    // Protegido é acessível apenas dentro da própria classe ou subclasses
    protected cnpj: string = '12123123123'

    // Privado é acessível apenas dentro da própria classe
    private senha: string = '123';

    // Readonly tem seu valor estabelecido uma vez e não pode ser modificado após, apenas LIDO
    readonly descricao: string = 'Apenas leitura';

    // Por padrão, quando não definimos o modificador de acesso do atributo/método, ele é PÚBLICO! 
    // Podendo ser alterado e lido a qualquer momento
    nome: string = 'Empresa';

    // Atributos estáticos só podem ser acessados diretamente pela sua propria classe
    // Não podendo ser acessados por instâncias dessa classe
    // Os mesmos conceitos de public, protected, private e readonly se aplicam ao static. Mudando seu tipo de acesso
    public static nomeClasse: string = 'People';

    // Atributo estático que só pode ser acessado dentro da sua própria classe privado
    private static senhaClasse: string = '123123123';

    // Atributo estático que só pode ser acessado dentro da sua própria classe e subclasse por estar protegido
    protected static cnpjClasse: string = '123123123';

    // Atributo estático que só pode ser lido por estar no modo readonly
    static readonly descricaoClasse: string = 'descricao-da-classe-estatico';

    constructor(nome: string, cnpj: string, senha: string, descricao: string) {
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
        }
    }
}