const img = document.querySelector("img");

// img.addEventListener("click", () => {
//   console.log("clicou");
// });

// function callback() {
//   console.log("clicou"); //função
// }

// img.addEventListener("click", callback); //passando o evento e chamando a função

// img.addEventListener("click", (e) => {
//   console.log(e);
// });
//O parâmetro 'e' retorna um objeto que tem várias propriedade e métodos do evento que está ocorrendo

const animaisLista = document.querySelector(".animais-lista");

function cal(e) {
  //console.log(e.currentTarget); //a propriedade do evento click 'currentTarget' vai retornar a lista das imgs
  //console.log(e.target); //A propriedade do evento click 'target' retorna exatamente a img que clico
}

animaisLista.addEventListener("click", cal);

const linkExterno = document.querySelector('a[href^="http"]');

function externo(e) {
  e.preventDefault(); // Essa propriedade preventDefault não deixa o evento normal acontecer q era ir para outra PG externa
  console.log(this);
  console.log(e.currentTarget);
}

linkExterno.addEventListener("click", externo);

//THIS faz referência a isso
function funThis(e) {
  console.log(this);
}

img.addEventListener("click", funThis);

const h1 = document.querySelector("h1");

function handle(event) {
  console.log(event.type, event);
}

// h1.addEventListener("click", handle); //click o evento é disparado
// h1.addEventListener("mouseenter", handle); //passando o mouse o evento é disparado
// h1.addEventListener("mousemove", handle); //o evento é disparado a cada micro movimento do mouse

// window.addEventListener("scroll", handle);
// window.addEventListener("resize", handle); //Disparado quando diminui o tamanho da janela.
//window.addEventListener("keydown", handle); //Disparado quando clica em alguma tecla do teclado

// function handleKeyboard(e) {
//   if (e.key === "a") {
//     document.body.classList.toggle("azul"); // add a class 'azul' na tag body quando click na tecla 'a' e remove clicando 'a'
//   }
// }
// window.addEventListener("keydown", handleKeyboard); //capitura e tecla clicada

const imgs = document.querySelectorAll("img");

function imgSrc(event) {
  const src = event.currentTarget.getAttribute("src");
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener("click", imgSrc);
});
