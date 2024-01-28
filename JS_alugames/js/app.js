const minhaListaDeAlugados = new Array();
function alterarStatus(item){
    const IDitem = `game-${item}`;
    console.log(IDitem);
    const itens = document.getElementById(IDitem)
    console.log(itens.children[2]);
    if (itens.innerText.includes("Alugar")) {
        itens.lastElementChild.innerHTML = "Devolver";
        itens.children[2].classList.add('dashboard__item__button--return');
    }
    else if (itens.innerText.includes("Devolver")) {
        itens.lastElementChild.innerHTML = "Alugar";
        itens.children[2].classList.remove("dashboard__item__button--return");
    }
}