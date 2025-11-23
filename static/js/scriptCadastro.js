document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formCadastro"); // Pega pelo ID novo
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmarSenha");
    const registro = document.getElementById("registro");
    const telefone = document.getElementById("telefone");
    const esporte1 = document.getElementById("esporte1");
    const esporte2 = document.getElementById("esporte2");
    const esporte3 = document.getElementById("esporte3");
  
    function resetBordas() {
      [email, senha, confirmarSenha, registro, telefone, esporte1, esporte2, esporte3].forEach(el => {
        el.style.borderColor = "black";
      });
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Impede o envio IMEDIATO para validar primeiro
      resetBordas();
  
      let valido = true;
  
      // 1. Validação de E-mail
      // Se quiser travar só na Fatec, mantenha o endsWith.
      // Se quiser testar com qualquer e-mail, troque por: email.value.includes("@")
      if (!email.value.includes("@")) { 
        email.style.borderColor = "red";
        valido = false;
      }
  
      // 2. Validação de Senha (REGEX CORRIGIDA E MAIS PERMISSIVA)
      // Aceita: Maiúscula, Minúscula, Número, Especial e de 8 a 50 chars.
      const senhaValor = senha.value;
      const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,50}$/;
      
      if (!regexSenha.test(senhaValor)) {
        senha.style.borderColor = "red";
        valido = false;
      }
  
      // 3. Confirmar Senha
      if (senhaValor !== confirmarSenha.value) {
        confirmarSenha.style.borderColor = "red";
        valido = false;
      }
  
      // 4. Registro (RA)
      if (!registro.value.trim()) {
        registro.style.borderColor = "red";
        valido = false;
      }
  
      // 5. Telefone (Mínimo 8 dígitos)
      const telefoneValor = telefone.value.replace(/\D/g, '');
      if (telefoneValor.length < 8) {
        telefone.style.borderColor = "red";
        valido = false;
      }
  
      // 6. Validação dos Esportes
      const esportes = [esporte1.value, esporte2.value, esporte3.value].filter(v => v !== "");
      const esportesUnicos = [...new Set(esportes)];
      
      // Obriga pelo menos 1 esporte
      if (esportes.length === 0) {
        [esporte1, esporte2, esporte3].forEach(el => el.style.borderColor = "red");
        valido = false;
      }
      // Não deixa repetir esporte
      if (esportes.length !== esportesUnicos.length) {
        [esporte1, esporte2, esporte3].forEach(el => el.style.borderColor = "red");
        valido = false;
      }
  
      if (!valido) {
        alert("Alguns campos estão inválidos. Confira os campos em destaque.");
        return; // Pára tudo e não envia
      }
  
      // === SUCESSO ===
      // Se chegou aqui, removemos o alert de simulação e enviamos de verdade.
      
      // Envia o formulário para o Django processar
      e.target.submit(); 
    });
  });