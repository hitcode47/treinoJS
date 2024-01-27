import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa{
    constructor (setconta, nome, cpf, rg){
        super(nome, cpf, rg);
        this.conta = setconta;
    }
}