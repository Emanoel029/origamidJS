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
