// Uma Promise representa uma operação assíncrona que pode terminar no futuro com sucesso (resolved) ou erro (rejected).
// Serve para lidar com operações que demoram: chamadas de API, leitura de arquivos, consultas a banco, timers etc. Em vez de travar o código esperando a resposta, ele continua rodando e "volta" quando a promessa for resolvida.

const minhaPromisse = new Promise((resolve, reject) => {
    const sucesso = true;

    if (sucesso) {
        resolve('Deu certo.');
    } else {
        reject('Deu errado.')
    }
});

minhaPromisse
.then((res) => console.log(res))
.catch((err) => console.log(err));
