export class Conta{
    static _numeroDeContas = 0;
    constructor(saldo, agencia, numeroConta){
        if (this.constructor == Conta) {
            throw new Error("Essa é uma classa absatrada e não deve ser inicializada diretamente");
        }
        this._saldo = saldo;
        this._agencia = agencia;
        this._numeroConta = numeroConta;
        Conta._numeroDeContas += 1;
    }

    get getSaldo(){
        return this._saldo
    }
    get getDadosDaConta(){
        return `Agência ${this._agencia}\n
                Conta : ${this._numeroConta}\n
                Saldo : ${this._saldo}`;
    }
    //------------------------Funções---------------------------------//
    sacar(valor){
        if(this._saldo >= valor && valor > 0){
            this._saldo = this._saldo - valor;
        }
        else{
            console.log("Saldo insuficiente");
        }
    }
    despositar(valor){
        if (valor > 0) {
            this._saldo += valor;
        }
    }
    transferir(valor, conta){
        throw new Error("Essa é uma classa absatrada e não deve ser inicializada diretamente");
    }
    _transferir(valor, conta, taxa){
        var saque = taxa*valor;
        this.sacar(saque);
        console.log(`transferência: ${valor}`);
        console.log(`taxa: ${saque-valor}`);
        conta.despositar(valor);
    }
    //----------------------------------------------------------------//
}