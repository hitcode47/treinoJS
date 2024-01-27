document.addEventListener("DOMContentLoaded", function(){
    var MeusBotoesTeclado = document.querySelectorAll('.tecldo input[type="button"]');
    var MinhaTelaDeExibicao = document.querySelector('input[type="tel"]');

    for (var i = 0; i < MeusBotoesTeclado.length; i++) {
        MinhaTelaDeExibicao += MeusBotoesTeclado[i].onclick();
    }
})
