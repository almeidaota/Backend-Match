// Botão de voltar
document.getElementById("backBtn").addEventListener("click", () => {
  window.history.back();
});

// Ação ao clicar em uma quadra
document.querySelectorAll(".quadra-box").forEach(box => {
  box.addEventListener("click", () => {
    const quadra = box.dataset.quadra;

    
    alert(`Você selecionou a Quadra ${quadra}`);

    
  });
});
