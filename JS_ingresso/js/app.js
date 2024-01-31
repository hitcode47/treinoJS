function comprar(){
    // Buscar todas as variáveis necessárias para o projeto
    const tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    const quantidade = parseInt(document.getElementById('qtd').value);
    const quantidadeDisponivel = parseInt(document.getElementById(`qtd-${tipoDeIngresso}`).innerHTML);
    
    if (quantidade.toString() == 'NaN') {
        alert('Informe uma quantidade para ser comprada');
    }
    else {
        if(quantidadeDisponivel >= quantidade){
            document.getElementById(`qtd-${tipoDeIngresso}`).innerHTML = quantidadeDisponivel - quantidade;
            document.getElementById('qtd').value = '';
        }
        else{
            alert('Quantidade de ingressos disponíveis insuficiente');
            document.getElementById('qtd').value = '';
        }
    }
    
}