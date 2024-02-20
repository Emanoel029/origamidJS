// Mostre no console cada parágrado do site
const paragra = document.querySelectorAll("p");
console.log(paragra);

paragra.forEach((p) => {
  console.log(p);
});

// Mostre o texto dos parágrafos no console
paragra.forEach((p) => {
  console.log(p.textContent); //textContent retorna texto dentro de um elemento html
});
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img"); // NodeList
//foi só colocar o item dentro dos parênteses
imgs.forEach((index, item) => {
  console.log(item, index);
});

//coloquei o parênteses da arrow function
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
