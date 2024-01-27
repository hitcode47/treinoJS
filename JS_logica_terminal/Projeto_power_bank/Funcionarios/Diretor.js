import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario{
    constructor(nome, salario){
        super(nome, salario);
        this._bonificacao = 1.2;
    }
}