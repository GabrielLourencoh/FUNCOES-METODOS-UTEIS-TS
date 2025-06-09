"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funcionario_1 = require("./funcionario");
const pessoa_1 = require("./pessoa");
const nome = new pessoa_1.Pessoa("Gabriel", 2009);
nome.apresentarSe();
const funcionario = new funcionario_1.Funcionario("Henrique", 2005, "chefe de Cozinha");
funcionario.funcionarioApresentar();
