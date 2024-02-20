const listaAnimais = document.querySelector(".animais-lista");

const altura = listaAnimais.scrollHeight; //mostra a altura do elemento com o scroll
const animaisTop = listaAnimais.offsetTop; //Distância entre o topo do elemento e o topo da página
console.log(animaisTop);

const raposaH2 = document.querySelector("h2");
const distanciaEsque = raposaH2.offsetLeft;

const rect = raposaH2.getBoundingClientRect(); // vai dar as coordenadas do elemento h2 em relação a outros na pg
console.log(rect);

console.log(distanciaEsque);

console.log(
  window.innerHeight,
  window.outerHeight,
  window.innerWidth,
  window.outerWidth,

  window.pageYOffset
);

//matchMedia() é a mesma coisa que usar @media query no css 19,02,17,34,15,35
const small = window.matchMedia("(max-width: 600px)");
console.log(small);
