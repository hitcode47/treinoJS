const meuCarrinho = document.querySelector('.carrinho__produtos');
const valorFinal = document.getElementById('valor-total');
meuCarrinho.innerHTML = "";
valorFinal.innerHTML = "R$0";
let total = { propriedade : 0 };

function adicionar(){
    //recolher variáveis referentes ao produtoro
    const produtoSelecionado = document.querySelector('.produto-input').value;
    const quantidade = document.getElementById("quantidade").value;
    const nomeProduto = produtoSelecionado.split('-')[0];
    const valorProduto = produtoSelecionado.split('R$')[1];
    let valorUnitarioVezesQuantidade = valorProduto*quantidade;

    if (document.getElementById('lista-produtos').textContent.includes(nomeProduto)) {
        if(quantidade== ''){
            alert('informe a quantidade');
        }
        else{
            for(let meuElemento of document.querySelectorAll('.carrinho__produtos__produto')){
                if(meuElemento.textContent.includes(nomeProduto)){
                    let quantidadeAtual = parseInt(meuElemento.textContent.split('x')[0]);
                    quantidadeAtual = quantidadeAtual + parseInt(quantidade);
                    valorUnitarioVezesQuantidade = valorProduto*quantidadeAtual;
                    meuElemento.innerHTML = `<section class="carrinho__produtos__produto">
                    <span class="texto-azul">${quantidadeAtual}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitarioVezesQuantidade}</span>
                    </section>`;
                    somar(parseInt(quantidade)*valorProduto, total);
                    document.getElementById("quantidade").value = '';
                    break;
                }
            }
        }
    }
    else{
        if(quantidade== ''){
            alert('informe a quantidade');
        }
        else{
        const lista = document.getElementById("lista-produtos");
        lista.innerHTML = lista.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitarioVezesQuantidade}</span>
        </section>`;
        somar(valorUnitarioVezesQuantidade, total);
        document.getElementById("quantidade").value = '';
        }
    }
    
}
function limpar(){
    const meuCarrinho = document.querySelector('.carrinho__produtos');
    const valorFinal = document.getElementById('valor-total');
    meuCarrinho.innerHTML = "";
    valorFinal.innerHTML = "R$0";
    total.propriedade = 0;
}
function somar(ParSubTotal, Partotal){
    Partotal.propriedade = Partotal.propriedade + ParSubTotal;
    console.log(Partotal.propriedade);
    document.getElementById('valor-total').innerHTML = `R$${Partotal.propriedade}`;
}