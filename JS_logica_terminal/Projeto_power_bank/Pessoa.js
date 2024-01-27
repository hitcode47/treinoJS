export class Pessoa{
    constructor (nome, cpf, rg) {
        this._nome = nome;
        this._cpf = cpf;
        this._rg = rg;
    }
    get getDadosDaPessoa(){
        return `Nome:  ${this._nome}, CPF: ${this._cpf} e RG: ${this._rg}`;
    }
    //------------------------Funções---------------------------------//
}

//pense em uma forma de impedir a inicialização de conta quando os dados da pessoa não forem inicializados
