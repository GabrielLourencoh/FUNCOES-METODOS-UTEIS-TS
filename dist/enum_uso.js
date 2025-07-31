"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_definicao_1 = require("./enum_definicao");
let statusCode = enum_definicao_1.StatusCode;
console.log(`Status code: ${statusCode.Sucesso}`);
console.log(`Status code: ${statusCode.ErroInterno}`);
console.log(`Status code: ${statusCode.Erro}`);
