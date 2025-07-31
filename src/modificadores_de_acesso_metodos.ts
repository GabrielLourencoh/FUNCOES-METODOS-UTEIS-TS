// Superclasse
class People {
    // Método static só pode ser acesso pela classe, não podendo ser acessado pela instância em si
    // Mas diretamente pela classe
    static nomeClasse(): void {
        console.log('O nome da classe é People')
    }

    // Método publico, pode ser acessado dentro e fora da classe, inclusiva por outras classes ou objetos
    public falar(): void {
        console.log('Bla bla bla');
    }

    // Método privado, não pode ser acessado fora da classe, apenas dentro dela
    private respirar(): void {
        console.log('Estou respirando...')
    }

    // Classe pública que utiliza uma classe privada, exemplificando como seria o uso de uma classe privada
    // Ja que não pode ser acessada diretamente 
    public viver(): void {
        this.respirar();
        console.log('Vivo, logo respiro')
    }

    // Classe protegida, pode ser acessada apenas dentro da sua classe (Superclasse) e dentro de suas Subclasses
    // Não pode ser usada diretamente
    protected pensar(): void {
        console.log("Estou pensando...");
    }

    // Classe pública que utiliza uma classe protegida, exemplificando como seria o uso de uma classe protegida
    // Ja que não pode ser acessada diretamente 
    public existir(): void {
        this.pensar();
    }
}

// Subclasse
class Trabalhador extends People {
    // Método público que utiliza um método protegido da sua superclasse, o que está correto
    // Pois metodos protegidos tbm podem ser acessados por suas subclasses
    public trabalhar(): void {
        console.log('Quando eu estou trabalhando, eu ');
        this.pensar();
    }

    // Isso não da certo!! Pois 'respirar' é uma classe PRIVADA, só pode ser acessada dentro da própria classe
    // public folego(): void {
    //     this.respirar();
    // }
}

const person = new People();
const trabalhador = new Trabalhador();

// Não funciona!! "nomeClasse" é um método estático, só pode ser acessado diretamente pela classe
// person.nomeClasse();

// Dessa forma funciona! "nomeClasse" só pode ser acessado diretamente pela classe
People.nomeClasse();

// Método 'falar' pode ser acessado porque é PUBLIC
person.falar();

// Isso não da certo!!! O método 'respirar' só pode ser acessado dentro da própria classe e não diretamente dessa forma
// person.respirar();

// Método 'viver' pode ser acessado porque é PUBLIC. Ele utiliza o método 'respirar' que é um método PRIVADO dentro da classe
person.viver();

// Isso não da certo!!! O método 'pensar' só pode ser acessado dentro da própria classe ou de suas subclasses
// Não diretamente dessa forma
// person.pensar();

// Método 'existir' pode ser acessado porque é PUBLIC. Ele utiliza o método 'pensar' que é um método PROTEGIDO dentro da classe
person.existir();

// Método 'trabalhar' pode ser acessado porque é PUBLIC.
// Ele utiliza o método 'pensar' que é um método PROTEGIDO da sua SUPERCLASSE
trabalhador.trabalhar();
