// O que faz: transforma texto JSON em objeto JS.
// Quando usar: para pegar dados JSON e usar no código.
const objeto = {
    name: 'GAbriel',
    age: 44
};
const jsonString = JSON.stringify(objeto);

const objParse = JSON.parse(jsonString);
console.log(objParse.age);

// Estrutura
// const objeto = JSON.parse(textoJSON);