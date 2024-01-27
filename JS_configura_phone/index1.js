// index.js
document.addEventListener('DOMContentLoaded', function () {
    // Cria um ouvinte para carregar o arquivo de documento html
    
    var campoTelefone = document.querySelector('input[type="tel"]');
    // Carrega variável de campo de telefone
    var BotoesTeclado = document.querySelectorAll('.teclado input[type="button"]');
    // Carrega lista de botões do telefone
    
    BotoesTeclado.forEach(function(botao){
        botao.addEventListener('click', function(){
            campoTelefone.value += botao.value;  
        })
    })
});
