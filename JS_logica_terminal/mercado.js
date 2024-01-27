const prompt = require('prompt-sync')();

const listaDeProdutos = new Array("banana", "tomate", "coca", "mamão", "açucar");
let cestaDeProdutos = new Array();

function apresentacao(){
console.log("Olá, bem vindo ao Mercado Melhor Lugar");
console.log("\nHoje, nosso mercado dipõe de:");
    listaDeProdutos.forEach(function(valor){
        console.log(valor);})

}

function menuInicial(a, b){
    apresentacao();
    let valor = 0;
    while(valor !== "s"){
        console.log("1 - Adicionar algo à cesta");
        console.log("2 - Ver cesta");
        let opcaoEscolhida = prompt("escolha uma das opções:");
        switch(opcaoEscolhida){
            case "1"://escolhe produtos e adiciona à cesta
                let valorDeParaSair = 0;
                while(valorDeParaSair !== -1){
                    let entrada = prompt("Digite o que deseja adicionar à cesta ou digite 'sair' para voltar ao menu anterior: ");
                    if (entrada === "sair") {
                        valorDeParaSair = -1; continue;
                    }
                    else if(listaDeProdutos.includes(entrada)) {
                        cestaDeProdutos.push(entrada);
                    }
                    else{
                        console.log("infelismente não temos esse produto");
                    }
                }
                break;
            case "2"://remete às operações na cesta
                if (cestaDeProdutos.length > 0){ 
                    cestaDeProdutos.forEach(function(valor) { 
                    console.log(valor)})
                    //Cesta();
                    }
                else{
                    console.log("Cesta vazia");
                    //Cesta();
                }
                break;
            default: console.log("Opção inválida");
    }
    valor = prompt("Deseja encerrar a compra online?(s = sim e n = não)");
    }
    
}
menuInicial(listaDeProdutos, cestaDeProdutos);



















/*function Cesta(){
    let opcaoEscolhida = 1;
    console.log("1 - Finalizar Compra");
    console.log("2 - Excluir itens");
    console.log("3 - Voltar às compras");
    
    switch(opcaoEscolhida){
        case 1: 
            console.log("Compra finalizada");
            //função para olhar lista de itens e adicionar algum à cesta.
            break;
        case 2: 
            console.log("Item Excluido");
            break;
        case 3:
            console.log("Compras");
            break;
        default: console.log("Opção inválida");
    }
}*/
/*function menuItens(){
    let opcaoEscolhida = 1;
    console.log("1 - Adicionar ao carrinho");
    console.log("2 - Adicionar aos favoritos");
    switch(opcaoEscolhida){
        case 1: 
            console.log("Item adicionado ao carrinho");
            //função para olhar lista de itens e adicionar algum à cesta.
            break;
        case 2: 
             console.log("Item adicionado aos favoritos");
            break;
        default: console.log("Opção inválida");
    }
}*/