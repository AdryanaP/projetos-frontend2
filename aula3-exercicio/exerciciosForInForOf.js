let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for of para exibir todos os numeros do array
for (let cadaNumero of numeros) {
    console.log(cadaNumero);
}

// for of para exibir o index e o valor
for (let [index, cadaNumero2] of numeros.entries()) {
    console.log(index, cadaNumero2);
}

// for of para somar todos os numeros do array
let soma = 0
for (let cadaNumero3 of numeros) {
    soma = soma + cadaNumero3;
    console.log(soma);
}

// -----------------------------------------------------------------------

let minhaGata = {
    nome: "Lua",
    idade: 4,
    cor: "branca",
}

// for in para exibir os atributos do objeto
for (let atributos in minhaGata) {
    console.log(atributos)
}

// for in para exibir os valores do objeto
for (let valores in minhaGata) {
    console.log(minhaGata[valores])
}

// for in para exibir os atributos e os valores do objeto
for (let atributos2 in minhaGata) {
    console.log(`${atributos2}`.toUpperCase() + `: ${minhaGata[atributos2]}`)
}