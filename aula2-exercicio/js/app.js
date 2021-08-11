alert("Vamos jogar pedra, papel e tesoura! Serão 3 rounds. Recebe 1 ponto quem ganhar, se empatar ninguém recebe ponto. Vambora")

// array com as opcoes da maquina
let opcoes = ["pedra", "papel", "tesoura"];

// aqui a gente escolhe o index do array de forma aléatoria para a maquina jogar
let escolhaMaquina = opcoes[Math.floor(Math.random() * opcoes.length)];
console.log(escolhaMaquina);

let rodadas = 0;
let pontosJogador = 0;
let pontosMaquina = 0;

// enquanto o valor da varivel rodadas for menor que 3 o sistema vai rodar
while (rodadas < 3) {
    let escolhaUsuario = prompt(`Round ${rodadas + 1}. Escolha entre pedra, papel ou tesoura!`);

    // função que compara a escolha do usuario e da maquina e retorna um vencedor
    function vencedor(escolhaUsuario, escolhaMaquina) {
        if (escolhaUsuario === "pedra" || escolhaUsuario === "Pedra") {
            switch (escolhaMaquina) {
                case "pedra":
                    return alert(
                        `Empatou! Ninguém pontuou. A escolha da maquina foi ${escolhaMaquina}.
                        Seus pontos: ${pontosJogador}. Pontos da maquina: ${pontosMaquina}`
                    );
                case "papel":
                    pontosMaquina++;
                    alert(
                        `Você perdeu :/ A escolha da maquina foi ${escolhaMaquina}. 
                         Seus pontos: ${pontosJogador}. Pontos da maquina: ${pontosMaquina}`
                    );
                    break;
                case "tesoura":
                    pontosJogador++;
                    alert(
                        `Você ganhou um ponto!!! A escolha da maquina foi ${escolhaMaquina}. 
                         Seus pontos: ${pontosJogador}. Pontos da maquina: ${pontosMaquina}`
                    );
                    break;
                default:
                    alert("Puts, deu ruim. A Adryana do futuro deve resolver.")
            }
        } else if (escolhaUsuario === "papel" || escolhaUsuario === "Papel") {
            switch (escolhaMaquina) {
                case "papel":
                    return alert(
                        `Empatou! Ninguém pontuou. A escolha da maquina foi ${escolhaMaquina}.
                        Seus pontos: ${pontosJogador}. Pontos da maquina: ${pontosMaquina}`
                    );
                case "tesoura":
                    pontosMaquina++;
                    alert(
                        `Você perdeu :/ A escolha da maquina foi ${escolhaMaquina}. 
                         Seus pontos: ${pontosJogador}. Pontos da maquina: ${pontosMaquina}`
                    );
                    break;
                case "pedra":
                    pontosJogador++;
                    alert(
                        `Você ganhou um ponto!!! A escolha da maquina foi ${escolhaMaquina}. 
                         Seus pontos: ${pontosJogador}. Pontos da maquina: ${pontosMaquina}`
                    );
                    break;
                default:
                    alert("Puts, deu ruim. A Adryana do futuro deve resolver.")
            }
        } else if (escolhaUsuario === "tesoura" || escolhaUsuario === "Tesoura") {
            switch (escolhaMaquina) {
                case "tesoura":
                    return alert(
                        `Empatou! Ninguém pontuou. A escolha da maquina foi ${escolhaMaquina}.
                        Seus pontos: ${pontosJogador}. Pontos da maquina: ${pontosMaquina}`
                    );
                case "pedra":
                    pontosMaquina++;
                    alert(
                        `Você perdeu :/ A escolha da maquina foi ${escolhaMaquina}. 
                         Seus pontos: ${pontosJogador}. Pontos da maquina: ${pontosMaquina}`
                    );
                    break;
                case "papel":
                    pontosJogador++;
                    alert(
                        `Você ganhou um ponto!!! A escolha da maquina foi ${escolhaMaquina}. 
                         Seus pontos: ${pontosJogador}. Pontos da maquina: ${pontosMaquina}`
                    );
                    break;
                default:
                    alert("Puts, deu ruim. A Adryana do futuro deve resolver.")
            }
        } else {
            alert("Resposta inválida.");
        }
    }

    vencedor(escolhaUsuario, escolhaMaquina);

    //aqui somamos +1 na variável rodada
    rodadas++;
}

// aqui temos o resultado final (depois de 3 rounds) baseado nos pontos obtidos
if (pontosJogador > pontosMaquina) {
    alert("Você ganhooooooou!!! Parabéns!")
} else if (pontosJogador < pontosMaquina) {
    alert("Você perdeu buabuabua :/")
} else if (pontosJogador === pontosMaquina) {
    alert("Empatou! Atulize a página pra tentar de novo")
} else {
    alert("Puts, deu ruim. A Adryana do futuro deve resolver.")
}

console.log(pontosMaquina);
console.log(pontosJogador);