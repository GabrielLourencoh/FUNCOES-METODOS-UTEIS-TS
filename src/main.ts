import { Funcionario } from './funcionario';
import { Pessoa } from './pessoa';

const nome = new Pessoa("Gabriel", 2009);
nome.apresentarSe();

const funcionario = new Funcionario("Henrique", 2005, "chefe de Cozinha");
funcionario.funcionarioApresentar();
