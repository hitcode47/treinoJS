import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario{
    constructor(nome, salario){
        super(nome, salario);
        this._bonificacao = 1.4;
    }

}