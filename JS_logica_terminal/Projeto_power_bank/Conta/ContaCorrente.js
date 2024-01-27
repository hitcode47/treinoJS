import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    constructor(agencia, numeroDaConta){
        super(agencia, numeroDaConta);
    }
    transferir(valor, conta){
        var taxa = 1.05;
        this._transferir(valor, conta, taxa);
    }
}