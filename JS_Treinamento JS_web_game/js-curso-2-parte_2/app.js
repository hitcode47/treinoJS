let nome = 'bruno';
alert(`Olá, ${nome}`);
let linguagemFavorita = prompt('Qual a linguagem de programação que você mais gosta?');
let valor1 = 5;
let valor2 = 8;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);
let idade = prompt('Por favor, insira sua idade: ');
idade >= 18 ? console.log('maior de idade') : console.log('menor de idade');

let contador = 0;
while(contador <= 10){
    console.log(contador);
    contador++;
}

let nota = parseInt(Math.random()*10);
console.log(nota);
nota >= 7 ? console.log('Aprovado') : console.log('Reprovado');