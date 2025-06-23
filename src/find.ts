// O que faz: retorna o primeiro item do array que satisfaz uma condição.
// Quando usar: quando precisa encontrar um único item com base em uma regra.
// Estrutura:
// const itemEncontrado = array.find((item) => condição);

const users = [
    { nome: 'Gabriel', id: 1 }, 
    { nome: 'Henrique', id: 2}, 
    { nome: 'Gejonel', id: 3}
];

const userEspecifico = users.find((usuario) => usuario.id === 2 && usuario.nome === 'Henrique');

if (userEspecifico) {
    console.log(userEspecifico);
} else {
    console.log("Usuario nao encontrado");
}