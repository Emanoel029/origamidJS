export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6; // calculo p pegar 60% do tamanho da tela p ter a animação

    function animaScroll() {
      sections.forEach((i) => {
        const sectionTop = i.getBoundingClientRect().top; //quando chegar no top
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible)
          i.classList.add("ativo"); // coloca a animação(class Ativo)
        else if (i.classList.contains("ativo")) {
          i.classList.remove("ativo"); // remove a animação (class Ativo)
        }
      });
    }
    animaScroll(); // p animar a primeira section assim q inicia o site

    window.addEventListener("scroll", animaScroll); //chamando o evendo scroll apartir do window
  }
}
