let resultado = confirm('Para acessar o Sistema - pressione OK')

let situacao = true

if (situacao) {
    window.location.href = "./acessoPermitido.html";
} else {
    window.location.href = "./acessoNegado.html";
}