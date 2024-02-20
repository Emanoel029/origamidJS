const imgs = document.querySelectorAll("img");

imgs.forEach((item, index, array) => {
  // console.log(item, index, array);
});

//ForEch e Array é um metodo de array, alguns objetos de array-link possuem este método. Caso não possua o ideal é trasforma-lo em uma array. Ex:

const titulos = document.getElementsByClassName("titulo");
console.log(titulos); //HTMLColection ao vivo para trasformar em uma (NodeList)

//Transformando em uma NodeListe
const tituloArray = Array.from(titulos);
tituloArray.forEach(function (item) {
  console.log(item);
});

//Código sem arrow function
let i = 0;
imgs.forEach(function () {
  console.log(i++);
});
//mesmo código com arrow function
imgs.forEach(() => console.log(i++));
