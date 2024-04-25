const form = document.getElementById("form-depositar");
const nomeBeneficiario = document.getElementById('nome-beneficiario');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(" ");
    return nomeComoArray.length >= 2;
}

form.addEventListener("submit", function(e){
    let formEvalido = false;
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b> ${valorDeposito.value} </b> depositado para o cliente: <b> ${nomeBeneficiario.value} </b> - conta: <b> ${numeroContaBeneficiario.value} </b> `;

    if (formEvalido) {
        const containerMensagemSucesso = document.querySelector(".mensagem-Sucesso");
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = "block" ;

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } else{
        nomeBeneficiario.style.border = '1px solid black'; 
        document.querySelector(".mensagem-erro").style.display = "block";
    }
});

nomeBeneficiario.addEventListener("change" , function(e) {
    console.log(e.target.value);
    formEvalido = validaNome(e.target.value);
  


    if (!formEvalido) {
        nomeBeneficiario.style.border = " 1px solid black"; 
        document.querySelector(".mensagem-erro").style.display = "block";
    }
    else{
        nomeBeneficiario.style.border = " ";
        document.querySelector(".mensagem-erro").style.display = "none";
    }

    
});

