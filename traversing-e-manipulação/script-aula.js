//const menu = document.querySelector('.menu');

// menu.outerHTML; // todo o html do elemento
// menu.innerHTML; // html interno
// menu.innerText; // texto, sem tags

// menu.innerText = '<p>Texto</p>'; // a tag vai como texto
// menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada

const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-descricao");

// console.log(h1.innerHTML);

// h1.outerHTML = "<p>Novo texto</p>";
// console.log(h1.outerHTML);

// console.log(animaisLista.outerHTML);

/*
lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho

lista.children[--lista.children.length]; // último filho
lista.querySelector('li:last-child'); // último filho

lista.querySelectorAll('li'); // todas as LI's
*/

//TRANSVERSING é como se vc selecionasse o pai do elemento
const lista = document.querySelector(".animais-lista");

console.log(lista.querySelector("li:last-child"));
console.log(lista.children[--lista.children.length]);

//Manipulando Elementos
const lista1 = document.querySelector(".animais-lista");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");

lista.appendChild(titulo);
