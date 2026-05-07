const pswConfirmaSenha = document.querySelector("#confirmasenha")

pswConfirmaSenha.addEventListener("paste", function(e){
    e.preventDefault()
})

// paste e o evento quando o usuario tenta colar dados no campo (caixa de texto)
// function(e) : Funcao que será executada quando houver o evento.
// A letra (e) dentro de parenteses representa o evento que ocorreu, que neste caso é (o ato de colar).
// o método preventDefaul() bloqueia a acao de colar.

function verificaConfirmaSenha() {
    let campoSenha = document.getElementById('senha')
    let valorSenha = campoSenha.value

    let campConfirmaSenha = document.getElementById('confirmasenha')
    let valorConfirmaSenha = campConfirmaSenha.value

    if(valorSenha == valorConfirmaSenha){
        return true
    } else {
        document.getElementById("mensagem").innerHTML = "Confirma Senha está errado!";
        return false
    }

}