//Scroll suave OBS:Essa function scrollSuave é para isolar essa parte do códico
export default function scroollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault(); //previni p n descer p a section clicada
    const href = event.currentTarget.getAttribute("href"); //para buscar somente o href
    const section = document.querySelector(href); // ligação do href com a section pelo ID

    section.scrollIntoView({
      behavior: "smooth", // faz o scroll suave
      block: "start", //Alinha ao início da section
    });

    //Forma alternativa
    // const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach((i) => {
    i.addEventListener("click", scrollToSection);
  });
}
