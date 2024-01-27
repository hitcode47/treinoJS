import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { VerificacaoDeSenha } from "./Funcionarios/verificarLogin.js";

const contaCorrenteBruno = new ContaCorrente(0, 1001, 4857);
const clienteBruno = new Cliente(contaCorrenteBruno, "bruno", "075671575", "44205745816");

const contaCorrenteGean = new ContaCorrente(0, 1001, 4587);
const clienteGean = new Cliente(contaCorrenteGean, "gean", "547568541", "48576258455");

console.log(clienteBruno.getDadosDaPessoa);
console.log(clienteGean.getDadosDaPessoa);

console.log(clienteBruno.conta.getSaldo);
console.log(clienteGean.conta.getSaldo);

clienteBruno.conta.despositar(100);
clienteGean.conta.despositar(200);

console.log(clienteBruno.conta.getSaldo);
console.log(clienteGean.conta.getSaldo);

clienteBruno.conta.transferir(50, clienteGean.conta);

console.log(clienteBruno.conta.getSaldo);
console.log(clienteGean.conta.getSaldo);

const diretor1 = new Diretor("Billy", 1500);
console.log(diretor1);

diretor1.cadastrarSenha(4578);

const resuldadoDaVerificacao = VerificacaoDeSenha.login(diretor1, 4754);
console.log(resuldadoDaVerificacao);