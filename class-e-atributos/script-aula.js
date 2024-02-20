const menu = document.querySelector(".menu");

menu.classList.add("ativo", "teste"); //add
menu.classList.remove("azul"); // remove
menu.classList.toggle("azul"); // add e remove
//menu.classList.toggle("azul"); // add e remove

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("Não-possui-azul");
}

//esta adicionando class vermelho (Forma antiga)
menu.classList += " vermelho";

console.log(menu.classList);

const animais = document.querySelector(".animais");
console.log(animais.attributes); // esta pegando pela class e vendo os attibutos dessa tag que pertence essa class

const imgs = document.querySelector("img");
// imgs.getAttribute("src"); //buscando o src
// console.log(imgs);

// imgs.setAttribute("alt", "texto alternativo"); //mudando texto alternativo
// console.log(imgs);

// const possuiAlt = imgs.hasAttribute("id"); // verifica se possui o atributo ID
// console.log(possuiAlt); // false

imgs.removeAttribute("alt");
console.log(imgs);

const carro = {
  portas: 4,
  andar: function (km) {
    console.log(`Andou ${km}`);
  },
};
