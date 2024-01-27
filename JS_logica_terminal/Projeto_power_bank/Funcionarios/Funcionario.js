export class Funcionario{
    constructor(nome, salario){
        this._nome = nome;
        this._salario = salario;
        this._bonificacao = 1;
        this._senha;
    }
    cadastrarSenha(senha){
        this._senha = senha;
    }
    _Senhadofuncionario(){
        return this._senha;
    }
    autenticar(senha){
        if(this._senha == senha){
            console.log("logado");
        }
        else{
            console.log("Senha incorreta");
        }
    }
}