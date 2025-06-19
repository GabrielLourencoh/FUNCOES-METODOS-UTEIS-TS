// São atalhos de sintaxe para lidar com Promises de forma mais limpa.
// Por que usar async/await?
// Evita .then().catch() aninhados.
// Torna o código assíncrono mais parecido com código síncrono, facilitando a leitura.


function esperar(ms: number): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve('Passou o tempo'), ms);
    });
}

async function executar() {
    console.log('Inicio');
    const resultado = await esperar(2000);
    console.log(resultado);
    console.log('Fim');
}

executar();

// Você pode usar try/catch em funções async:

async function executarComErro() {
    try {
        const resposta = await Promise.reject('Algo deu errado');
        console.log(resposta);
    } catch (erro) {
        console.error("Erro capturado: ", erro);
    }
}

executarComErro();

// Funções que retornam Promise
// Em TypeScript, uma função async sempre retorna uma Promise. Mesmo que você retorne um valor direto.

async function exemplo(): Promise<number> {
    return 10; // É o mesmo que: return Promise.resolve(10)
}

exemplo();

// Exemplo com fetch (simulação de API):

async function buscarDados(): Promise<void> {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const dados = await resposta.json();
        console.log(dados);
    } catch (error) {
        console.log('Erro na API', error);
    }
}

buscarDados();




// Conceito	Explicação
// Promise	Representa uma operação assíncrona
// resolve()	Indica que a Promise foi resolvida com sucesso
// reject()	Indica que a Promise foi rejeitada (ocorreu um erro)
// .then()	Define o que fazer quando a Promise for resolvida com sucesso
// .catch()	Define o que fazer quando a Promise for rejeitada (erro)
// async	Declara que a função retorna uma Promise automaticamente
// await	Pausa a execução até que a Promise seja resolvida ou rejeitada
// fetch()	Função nativa usada para fazer requisições HTTP e retorna uma Promise com a resposta