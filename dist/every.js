"use strict";
// O que faz: verifica se todos os itens do array atendem a uma condição.
// Quando usar: quando quiser garantir que todos os elementos seguem uma regra.
// Estrutura:
// const todosOk = array.every((item) => condição);
const idades = [29, 40, 99, 18, 20];
const todosMaioresIdades = idades.every((idade) => idade >= 18); // true
if (todosMaioresIdades) {
    console.log('Todos são maiores de idade');
}
else {
    console.log('Nem todos são maiores de idade');
}
