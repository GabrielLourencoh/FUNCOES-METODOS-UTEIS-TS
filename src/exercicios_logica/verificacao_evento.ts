// Desafio: Quem vai participar do evento?
// Você tem uma lista de pessoas com nome, idade e se confirmaram presença:

// const pessoas = [
//   { nome: "Ana", idade: 22, confirmou: true },
//   { nome: "Bruno", idade: 17, confirmou: true },
//   { nome: "Carla", idade: 30, confirmou: false },
//   { nome: "Daniel", idade: 19, confirmou: true },
//   { nome: "Elisa", idade: 16, confirmou: true }
// ];
// Crie uma nova lista somente com as pessoas que:

// Confirmaram presença (confirmou: true)

// Têm 18 anos ou mais

// Exiba o nome dessas pessoas em um array.

const pessoas = [
  { nome: "Ana", idade: 22, confirmou: true },
  { nome: "Bruno", idade: 17, confirmou: true },
  { nome: "Carla", idade: 30, confirmou: false },
  { nome: "Daniel", idade: 19, confirmou: true },
  { nome: "Elisa", idade: 16, confirmou: true }
];

const podemIr = pessoas.filter((pessoa) => pessoa.confirmou === true && pessoa.idade >= 18);

console.log('Pessoas que podem ir: ')
podemIr.forEach((pessoa: { nome: string, idade: number, confirmou: boolean }) => {
    console.log(pessoa)
});

