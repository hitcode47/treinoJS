import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(agencia, numeroDaConta){
        super(agencia, numeroDaConta)
    }
    transferir(valor, conta){
        let taxa = 1.02;
        this._transferir(valor, conta, taxa);
    }
}