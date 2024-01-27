// Gera valor aleatório
var valorAleatorio = parseInt((Math.random()*10+1)); 
console.log(valorAleatorio);
// Variável que mostra a quantidade de chances
var chances = {propriedade : 5}; 
//--------------------------------------------------------------------------------------------//
            // ---------------------  Funções Declaradas  ----------------------------//  
//--------------------------------------------------------------------------------------------//
// Função que recebe os chutes do usuário
let texto1, texto2;
let palavraChance = chances.propriedade > 1 ? 'chances' : 'chance'; 
EscreverTextoEmTela('h1', texto1, 'Adivinhe o numero secreto' );
EscreverTextoEmTela('.texto__paragrafo', texto2, 'Escolha um número entre 1 e 10. Você tem ' + chances.propriedade + ' ' + palavraChance);

function chutar(){
    var chute = document.querySelector('.container__input').value;
    console.log(chute);
    VerificarChute(chute, valorAleatorio);
}

// Função que compara o valor do chute com a número secreto e retorna o valor da comparação
function VerificarChute(ParChute, ParValorAleatorio){

    let comparaChuteMenor = ParChute < ParValorAleatorio;
    let comparaChuteMaior = ParChute > ParValorAleatorio;
    let chuteMaior, chuteMenor, chuteIgual, DeclaraVitoria;

    if(comparaChuteMenor){

        if (NumeroDeChances(chances) > 0) {
            palavraChance = chances.propriedade > 1 ? 'chances' : 'chance'; 
            EscreverTextoEmTela('.texto__paragrafo', chuteMenor, 'O número secreto é maior. Você tem ' + chances.propriedade +' '+ palavraChance);
        }
        else{
            EscreverTextoEmTela('.texto__paragrafo', chuteMenor, `Game Over. O número secreto era ${valorAleatorio}`);
        }
        LimpaEntrada();
    }
    else if (comparaChuteMaior){
        if (NumeroDeChances(chances) > 0) {
            palavraChance = chances.propriedade > 1 ? 'chances' : 'chance'; 
            EscreverTextoEmTela('.texto__paragrafo', chuteMaior, 'O número secreto é menor. Você tem ' + chances.propriedade +' '+ palavraChance);
        }
        else{
            EscreverTextoEmTela('.texto__paragrafo', chuteMaior, `Game Over. O número secreto era ${valorAleatorio}`);
        }
        LimpaEntrada();
    }
    else{
        EscreverTextoEmTela('h1', DeclaraVitoria, '  ACERTOU  ');
        EscreverTextoEmTela('.texto__paragrafo', chuteIgual, 'Número secreto: ' + valorAleatorio);
        LimpaEntrada();
        document.getElementById('reiniciar').removeAttribute('disabled');
        LimpaEntrada();
    }
}

// Função que conta o número de chances restantes ao jogador
function NumeroDeChances(valor){
    valor.propriedade = valor.propriedade - 1;
    return valor.propriedade;
}
// Função que limpa o campo de entrada de dados a cada chute errado
function LimpaEntrada(){
    let VarLimpadora = document.querySelector('.container__input');
    VarLimpadora.value = '';
}
// Função que facilita a dos textos html por meio do javascript
function EscreverTextoEmTela(tag, variavel, texto){
    variavel = document.querySelector(tag);
    variavel.innerHTML = texto;
}
function reiniciar(){
    EscreverTextoEmTela('h1', texto1, 'Adivinhe o numero secreto' );
    EscreverTextoEmTela('.texto__paragrafo', texto2, 'Escolha um número entre 1 e 10');
    valorAleatorio = parseInt((Math.random()*10+1)); 
    chances = {propriedade : 5};
}

