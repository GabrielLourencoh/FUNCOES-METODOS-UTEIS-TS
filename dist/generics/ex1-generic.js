"use strict";
// Generic é usado para deixar a tipagem flexiva, definindo a tipagem em execução.
/**
 * Algumas convenções
 * S => state
 * T => type
 * K => key
 * V => value
 * E => elemente
 */
// Sem generic
// function useState() {
//     let state: number | string;
//     function get() {
//         return state;
//     }
//     function set(newValue: number | string) {
//         state = newValue;
//     }
//     return { get, set };
// }
// let newState = useState()
// newState.get();
// newState.set(123);
// newState.set('Gabriel');
// Com generic
// Definimos que pode ser duas opções, ou number ou string. T extends number | string
// Se passarmos um sinal de igual com um tipo, significa que se o dev não passar o tipo do generic, ele por padrao é o que esta no =. T extends number | string = string
function useState() {
    // Passando o 'T' como tipo, deixamos a tipagem 'unknown', ou seja, desconhecida
    let state;
    function get() {
        return state;
    }
    function set(newValue) {
        state = newValue;
    }
    return { get, set };
}
// Na hora de usar a função, definimos o tipo que queremos. A partir do momento que definimos o tipo, devemos respeitar.
let newState = useState();
newState.get();
// newState.set(123);
newState.set('Gabriel');
