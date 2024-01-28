function tocaSom(id_som_tecla){
    // Função que busca a referência através de um id para as teclas de som e executa o som solicitado
    const teclaRequisitada = document.querySelector(id_som_tecla);
    if (teclaRequisitada == undefined || teclaRequisitada == null) {
        alert('Tecla incorreta');
    }
    else{
        teclaRequisitada.play();
    }
}
// lista que recebe referência para todos os elementos com a classe tecla dentro do html
const listadeteclas = document.querySelectorAll('.tecla'); 

const mapeamentoAudio = {
    "q" : "#som_tecla_pom",
    "w" : "#som_tecla_clap",
    "e" : "#som_tecla_tim",
    "a" : "#som_tecla_puff",
    "s" : "#som_tecla_splash",
    "d" : "#som_tecla_toim",
    "z" : "#som_tecla_psh",
    "x" : "#som_tecla_tic",
    "c" : "#som_tecla_tom",

}
const mapeamentoBotoes = {
    "q" : ".tecla_pom",
    "w" : ".tecla_clap",
    "e" : ".tecla_tim",
    "a" : ".tecla_puff",
    "s" : ".tecla_splash",
    "d" : ".tecla_toim",
    "z" : ".tecla_psh",
    "x" : ".tecla_tic",
    "c" : ".tecla_tom"
}
for (let contador = 0; contador < listadeteclas.length; contador++){ 
    // laço para varrer todos os elementos da bandeja de sons e atribuir um evento onclick a cada elemento
    // de tecla pressionada.
    let tecla = listadeteclas[contador];
    let audio = tecla.classList[1];
    let nome_audio = `#som_${audio}`;
    
    tecla.onclick = function(){
        tocaSom(nome_audio);
        tecla.classList.add('ativa');
        tecla.classList.remove('ativa');
    }

    tecla.onkeydown = function(elemento){
        if(elemento.key in mapeamentoAudio){
            tocaSom(mapeamentoAudio[elemento.key]);
            var bot = document.querySelector(mapeamentoBotoes[elemento.key]);
            bot.classList.add("ativa");
            bot.focus();
        }
        else if(elemento.key == 'Tab'){
            console.log(tecla.classList[1]);
        }
    }
    tecla.onkeyup = function(elemento){
        if (elemento.key in mapeamentoAudio) {
            var bot = document.querySelector(mapeamentoBotoes[elemento.key]);
            bot.classList.remove("ativa");
        }
    }
}