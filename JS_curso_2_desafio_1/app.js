let tituloh1 = document.querySelector('h1');
tituloh1.innerHTML = 'Hora do Desafio';

function verificadorDeClick(){
    console.log('O botão foi clicado')
}
function AlertaDeClick(){
    alert('eu amo Javascript');
}
function PerguntaSobreCidade(){
    let cidade = prompt('Escolha uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você`);
}
function SomaDeDoisNumeros(){
    let numero1 = parseInt(prompt('infomer o primeiro número: '));
    let numero2 = parseInt(prompt('infomer o segundo número: '));
    alert(`A soma de ${numero1} e ${numero2} é igual a ${numero1+numero2}`);
}
let numero = parseInt(prompt('Infomer o numero que deseja analisar: '));
verificaNumero(numero);
function verificaNumero(valor){
    if (numero > 0){
        alert('numero positivo');
    }
    else if(numero < 0){
        alert('numero negativo');
    }
    else{
        alert('numero igual a zero');
    }
}