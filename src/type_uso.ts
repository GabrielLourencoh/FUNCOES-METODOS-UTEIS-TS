import { Status } from "./type";

let statusPedido: Status;

statusPedido = "aberto";
console.log(`Status do pedido agora: ${statusPedido}`);

statusPedido = 'fechado';
console.log(`Status do pedido agora: ${statusPedido}`);

// Isso ou qualquer coisa fora de ""aberto" | "fechado" | "pendente" está errado!!!
// statusPedido = 'opa';
