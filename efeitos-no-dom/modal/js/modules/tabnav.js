//Essa função initTabNav() é apenas para isolar todo o bloco de código que está dentro dela.
export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  tabContent[0].classList.add("ativo"); //para sempre vir o primeiro item como ativo

  function activeTab(index) {
    tabContent.forEach((e) => {
      e.classList.remove("ativo"); // remove ativo na função
    });
    console.log(tabContent[index].dataset.anime);
    const direcao = tabContent[index].dataset.anime; // add os data
    tabContent[index].classList.add("ativo", direcao); //add ativo na função
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
