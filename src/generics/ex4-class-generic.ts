class Fila<T> {
    private elementos: T[] = [];

    adicionar(elemento: T): void {
        this.elementos.push(elemento);
    }

    remover(): T | undefined {
        return this.elementos.shift();
    }
}

let filaDeNumeros = new Fila<number>();
filaDeNumeros.adicionar(10);
filaDeNumeros.adicionar(20);
console.log(filaDeNumeros.remover()); // 10

let filaDeStrings = new Fila<string>();
filaDeStrings.adicionar("primeiro");
filaDeStrings.adicionar("segundo");
console.log(filaDeStrings.remover()); // "primeiro"