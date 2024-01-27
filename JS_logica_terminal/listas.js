const minhalista = new Array(`claudivan`, `celia`, `vitória`, `gean`);
minhalista.push(`bruno`);
console.log(minhalista);

minhalista.forEach(function(elemento, indice) {
    console.log(`${indice}: ${elemento}`);
});