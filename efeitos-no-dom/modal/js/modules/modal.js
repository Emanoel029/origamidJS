export default function initModal() {
  const botaoAbrir = document.querySelector("[data-modal='abrir']");
  const botaoFechar = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");

  if (botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(e) {
      e.preventDefault();
      containerModal.classList.toggle("ativo");
    }

    // function fecharModal(e) {
    //   e.preventDefault(e);
    //   containerModal.classList.remove("ativo");
    // }

    function cliqueForaModal(e) {
      if (event.target === this) {
        toggleModal(e);
      }
    }

    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}
