//Essa função initTabNav() é apenas para isolar todo o bloco de código que está dentro dela.
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add("ativo"); //para sempre vir o primeiro item como ativo

  function activeTab(index) {
    tabContent.forEach((e) => {
      e.classList.remove("ativo"); // remove ativo na função
    });

    tabContent[index].classList.add("ativo"); //add ativo na função
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}

initTabNav();

//isolando esse bloco de código dentro dessa function initAccordion()
function initAccordion() {
  const accondionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  if (accondionList.length) {
    accondionList[0].classList.add(activeClass); //deichando o primeiro elemento ativo DT
    accondionList[0].nextElementSibling.classList.add(activeClass); //deixando o proximo elemento ativo depois do DT que é o DD

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
      //o this está fazendo referência ao accondionList(dt) que está senco clicado.
    }

    accondionList.forEach((i) => {
      i.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

//Scroll suave OBS:Essa function scrollSuave é para isolar essa parte do códico
function scroollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

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
scroollSuave();
