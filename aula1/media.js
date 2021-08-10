// Aula 1 - Revisão

// Array inicial de exemplo
let notas = [10, 9, 8, 10];

// Quantidade de bimestre
let bimestre = 4;

// Média da instituição
let mediaAprovacao = 7;

// Função de calcular média 
function media(notas) {
    console.log(`Suas notas são: ${notas}`);
    let soma = 0;
    console.log("Calculo da sua média:");

    notas.forEach((elemento) => {
        console.log(`${soma} + ${elemento}`);
        soma += elemento;
        console.log(soma);
    });
    let media = soma / bimestre;

    console.log("Resultado:");
    if (media >= 7) {
        return (`Aprovado! Sua média é ${media}.`);
    } else {
        return (`Poxa, não foi aprovado. Sua média é ${media}.`);
    }
}

console.log(media(notas));

console.log("---------------");

console.log(media([1, 5, 4, 3]));

console.log("---------------");

console.log(media([7, 4, 4, 9]));

console.log("---------------");

console.log(media([1, 9, 8, 10]));