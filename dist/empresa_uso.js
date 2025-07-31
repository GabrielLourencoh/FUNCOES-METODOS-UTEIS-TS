"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const empresa_1 = require("./empresa");
const e = new empresa_1.Empresa("Empresa", "123123123123", "senha", "Descricao");
console.log(`Empresa antes de ser alterada: `, e.info());
