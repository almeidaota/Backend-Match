
const emailInput = document.querySelector('input[type="email"]');
const senhaInput = document.querySelector('input[type="password"]');

const btnAvancar = document.getElementById("avancar");
const btnCadastrar = document.getElementById("cadastrar");
const forgotPassword = document.querySelector(".forgot-password");

// Validar e-mail institucional
function emailInstitucionalValido(email) {
  return email.endsWith("@fatec.sp.gov.br");
}

// BOTÃO AVANÇAR 
if (btnCadastrar) {
    btnCadastrar.addEventListener("click", () => {
        window.location.href = "/cadastro-fatec/";
    });
}

if (forgotPassword) {
    forgotPassword.addEventListener("click", () => {
        // Se ainda não tiver a página de recuperação, pode deixar comentado
        // window.location.href = "Fatecamigos-senha.html"; 
        alert("Funcionalidade de recuperar senha em desenvolvimento.");
    });
}

// BOTÃO CADASTRAR 
btnCadastrar.addEventListener("click", () => {
   
  window.location.href = "/cadastro-fatec/"; /* Deve bater com o path que definimos no urls.py */
});


// ESQUECEU A SENHA 
forgotPassword.addEventListener("click", () => {
    window.location.href = "Fatecamigos-senha.html";
});
