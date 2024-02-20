// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll(".menu a");

menu.forEach((i) => {
  i.classList.add("ativo"); //adiciona
});
console.log(menu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((i) => {
  i.classList.remove("ativo"); //remove
});
console.log(menu);
menu[0].classList.add("ativo");

// // Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");

imgs.forEach((i) => {
  const possuiAlt = i.hasAttribute("alt"); //verifica
  console.log(i, possuiAlt);
});

// // Modifique o href do link externo no menu
const linkEx = document.querySelector("a[href^='https']"); // seletor de css que começa com A[href^='https']
linkEx.setAttribute("href", "https://www.google.com.br");
