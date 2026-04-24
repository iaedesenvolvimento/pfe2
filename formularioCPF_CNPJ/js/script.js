//var valorPessoa = "";

/*
    Toda vez que for utilizado uma função antecedido pelo caractere $, voce esta dizendo que sera executado pela linguagem jQuery.
    A funcao ready executa uma acao ou seja uma (funcao), assim que a pagina e totalmente carregada.
*/

/*
$(document).ready(function() {
    $("input[name=pessoa]").on("click", function() {   // Ao clicar em um dos botoes de radio (pessoa fisica ou juridica), será executada uma ação (função).
        valorPessoa = $('input[name=pessoa]:checked').val();  // A variavel valorPessoa recebe o valor do radio selecionado, ou seja, se for selecionado pessoa fisica, a variavel recebe o valor "fisica" e se for selecionado pessoa juridica, a variavel recebe o valor "juridica".
        if (valorPessoa === "fisica") {
            $("#novoCampo").html('<label for=CPF class=linha><span>CPF</span> <input type=text name=CPF id=CPFid class=caixa_texto placeholder=XXX.XXX.XXX-XX pattern=[0-9]{11} required maxlength=11><label')
        } else if (valorPessoa === "juridica") {
            $("#novoCampo").html('<label for=CNPJ class=linha><span>CNPJ</span> <input type=text name=CNPJ id=CNPJid class=caixa_texto placeholder=XX.XXX.XXX/XXXX-XX pattern=[0-9]{14} required maxlength=14><label')
        }
    })
})

 */

document.addEventListener("DOMContentLoaded", () =>{
      const radios = document.querySelectorAll('input[name="pessoa"')
      const novoCampo = document.getElementById("novoCampo")
 
      radios.forEach(radio => {
         radio.addEventListener("click", () =>{
            const valorPessoa = document.querySelector('input[name="pessoa"]:checked').value
 
            if(valorPessoa == 'fisica') {
               novoCampo.innerHTML = '<label for=CPF class=linha><span>CPF</span><input type=text name=CPF id=CPFid class=caixa_texto placeholder=XXX-XXX-XXX-XX required></label>'
            } else if (valorPessoa == 'juridica'){
               novoCampo.innerHTML ='<label for=CNPJ class=linha><span>CNPJ</span><input type=text name=CNPJ id=CNPJid class=caixa_texto placeholder=XXX-XXX-XXX/XXXX required></label>'
 
            }
         })
      })
   })