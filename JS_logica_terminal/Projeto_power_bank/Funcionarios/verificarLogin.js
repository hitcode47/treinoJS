import { Funcionario } from "./Funcionario.js";
export class VerificacaoDeSenha{

    static login(autenticavel, senha){
        if (VerificacaoDeSenha.verificaEntrada(autenticavel)){
            return autenticavel.autenticar(senha);
        }   
    }

    static verificaEntrada(autenticavel){ // quando eu tiro o static dá erro
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}