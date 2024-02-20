// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector("img");
const distanTop = primeiraImg.offsetTop;
console.log(distanTop);

// Retorne a soma da largura de todas as imagens

const todasImg = document.querySelectorAll("img");
let largura = 0;
todasImg.forEach((i) => {
  largura += i.width;
});
console.log(largura);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");
links.forEach((i) => {
  const width = i.offsetWidth;
  const height = i.offsetHeight;

  if (width >= 48 && height >= 48) {
    console.log(`O link ${i.textContent} atende ao tamanho mínimo recomendado`);
  } else {
    console.log(
      `O link ${i.textContent} não atende ao tamanho mínimo recomendado`
    );
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const brow = window.matchMedia("(max-width: 720px)");
const menu = document.querySelector(".menu");
if (brow.matches) {
  menu.classList.add("menu-mobile");
}

//0307 Eventos 1
