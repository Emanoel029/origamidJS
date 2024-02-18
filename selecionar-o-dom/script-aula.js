const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection[1]);
const griDois = document.getElementsByClassName("grid-section contato");
console.log(griDois);

const primeraLI = document.querySelector("li");
console.log(primeraLI);

const primeraUl = document.querySelector("ul");
console.log(primeraUl);

const link = document.querySelector('[href^="#"]');
console.log(link);

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg[1]);

const gridSectionHTML = document.getElementsByClassName("grid-section"); //vindo do html ao vivo (HTMLColection)
const gridSectionNode = document.querySelectorAll(".grid-section"); //vindo estatico não é ao vivo(NodeList)

primeraUl.classList.add("grid-section"); // add uma class no (HTMLColection)

console.log(gridSectionHTML);
console.log(gridSectionNode);

gridSectionNode.forEach(function (i, index) {
  console.log(i);
});

//transformando array-Link(ao vivo) em array(estático)
const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid);
