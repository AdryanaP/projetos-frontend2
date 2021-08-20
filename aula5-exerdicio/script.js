const modoNoturno = document.querySelector('#botao-modo-noturno');
const iconBotao = document.querySelector('#icon-botao');
const root = document.querySelector(':root');
let temaAtual = "claro";

const temas = [
    {
        nome: "claro",
        cores: [
            {
                chave: "--fundo",
                valor: "rgb(204, 204, 204)"
            },
            {
                chave: "--fundo-li",
                valor: "rgb(255, 255, 255)"
            },
            {
                chave: "--texto",
                valor: "rgb(71, 71, 71)"
            },
            {
                chave:"--destaque",
                valor:"rgb(122, 122, 122)"
            }
        ]
    },
    {
        nome: "escuro",
        cores: [
            {
                chave: "--fundo",
                valor: "rgb(35, 33, 33)"
            },
            {
                chave: "--fundo-li",
                valor: "rgb(52, 52, 52)"
            },
            {
                chave: "--texto",
                valor: "rgb(255, 255, 255)"
            },
            {
                chave:"--destaque",
                valor:"rgb(255, 235, 187)"
            }
        ]
    }
];

function acharTema(nome) {
    return temas.find(tema => tema.nome === nome)
};

function aplicarTema(tema) {
    for(let cor of tema) {
        root.style.setProperty(cor.chave, cor.valor)
    }
};

function nomeTema() {
    let bufferTema;
    switch(temaAtual) {
        case "claro":
            bufferTema = "escuro"
            modoNoturno.style.setProperty("background", "var(--azul)")
            iconBotao.style.setProperty("background", "var(--icone-claro)")
            iconBotao.style.transform = "translate(25px)"
            break;
        case "escuro":
            bufferTema = "claro"
            modoNoturno.style.setProperty("background", "var(--azul-escuro)")
            iconBotao.style.setProperty("background", "var(--icone-escuro)")
            iconBotao.style.transform = "translate(0px)"
            break;
    }
    temaAtual = bufferTema
    return temaAtual
};

modoNoturno.addEventListener("click", () => {
    const novoTema = acharTema(nomeTema()).cores

    aplicarTema(novoTema)
});
