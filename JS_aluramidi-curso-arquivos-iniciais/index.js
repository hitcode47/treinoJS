function tocaSom(id_som_tecla){
    // Função que busca a referência através de um id para as teclas de som e executa o som solicitado
    const teclaRequisitada = document.querySelector(id_som_tecla);
    if (teclaRequisitada == undefined || teclaRequisitada == null) {
        alert('Função não encontrada')
    }
    else{
        teclaRequisitada.play();
    }
}
    // lista que recebe referência para todos os elementos com a classe tecla dentro do html
const listadeteclas = document.querySelectorAll('.tecla'); 

const mapeamentoDeBotoes = {
    "q" : "#som_tecla_pom",
    "w" : "#som_tecla_clap",
    "e" : "#som_tecla_tim",
    "a" : "#som_tecla_puff",
    "s" : "#som_tecla_splash",
    "d" : "#som_tecla_toim",
    "z" : "#som_tecla_psh",
    "x" : "#som_tecla_tic",
    "c" : "#som_tecla_tom"
}
for (let contador = 0; contador < listadeteclas.length; contador++){ 
    // laço para varrer todos os elementos da bandeja de sons e atribuir um evento onclick a cada elemento
    // de tecla pressionada.
    let tecla = listadeteclas[contador];
    let audio = tecla.classList[1];
    let nome_audio = `#som_${audio}`;
    
    tecla.onclick = function(){
        tocaSom(nome_audio);
    }
    tecla.onkeydown = function(elemento){
        
        tocaSom(mapeamentoDeBotoes[elemento.key]);
        if(elemento.code === 'Space' || elemento.doce === 'Enter' || elemento.key == elemento.key){
        tecla.classList.add("ativa");
        }
        else{
            console.log(elemento.code);
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove("ativa");
    }
}