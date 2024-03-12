const div = document.querySelector("[data-cor]");
// console.log(div.dataset.cor); //é uma forma de facilitar o DOM e o JavaScript

div.dataset.heigth = 1000; // add um novo elemento na div, no dataset
div.dataset.totalHeight = 2000; // la no dou ao vivo ele adciona assim: data-total-height="2000"

delete div.dataset.width; // deletando um elemento da div  do dataset
console.log(div.dataset);
