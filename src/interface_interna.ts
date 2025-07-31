interface Pedido {
    id: number;
    status: "aberto" | "fechado" | "pendente";
}

let meuPedido: Pedido = {
    id: 10,
    status: "aberto"
}

console.log(meuPedido);