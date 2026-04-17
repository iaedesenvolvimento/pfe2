/*$(document).ready(function(){
    let largura_janela = $(window).width();

    if(largura_janela <= 480){
        $("#paragrafo").append("Esta frase é somente para dispositivo móvel");
    } 
    // Corrigido: de & para &&
    else if(largura_janela >= 481 && largura_janela <= 768){
        $("#paragrafo").append("Esta frase é somente para tablet");
    } 
    else if(largura_janela >= 769 && largura_janela <= 1024) {
        $("#paragrafo").append("Esta frase é monitor de média resolucao ou seja HD");
    } 
    else {
        $("#paragrafo").append("Esta frase é monitor de alta resolucao ou seja FullHD");
    }
});*/

/*    JAVASCRIPT ES6    */

/*  A funcao insertAdjacentElementText é utilizada para inserir texto em uma posição especifica referente a um elemento (tag) HTML 
    O paramentro "beforeend" se refe a posição que é dentro da tag, mas no final dela.

*/
function atualizaTexto() {
    let largura_janela = window.innerWidth
    let paragrafo = document.getElementById("paragrafo")

    paragrafo.textContent = ""    // LIMPA ANTES DE ADICIONAR UM TEXTO

    if (largura_janela <= 480) {
        paragrafo.insertAdjacentText("beforeend", "Esta frase é somente para dispositivo móvel")
    } else if (largura_janela >= 481 && largura_janela <= 768) {
        paragrafo.insertAdjacentText("beforeend", "Esta frase é somente para tablet")
    } else if (largura_janela >= 769 && largura_janela <= 1024) {
        paragrafo.insertAdjacentText("beforeend", "Esta frase é monitor de média resolução ou seja HD")
    }
    else {
        paragrafo.insertAdjacentText("beforeend", "Esta frase é monitor de média resolucao ou seja FullHD")
    }
}

window.addEventListener("resize", atualizaTexto)



