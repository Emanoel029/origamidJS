var nome = "Emanoel";

console.log(nome.charAt(0)); // retorna a posição da letra que está na variável nome
console.log(nome.replace("E", "M")); // toca a letra E por M

function area(lado) {
  return lado * lado;
}

console.log(area.length); //retorna a função como uma string

var btn = document.querySelector(".btn");

btn.classList.add("azul"); //adcionando uma nova class
btn.innerHTML; // retorna o valor que está dentro do botão (CLIQUE)

//exercícios

// nomeie 3 propriedades ou métodos de strings
length;
toUpperCase();
toLocaleLowerCase();

// nomeie 5 propriedades ou métodos de elementos do DOM
querySelector;
getElementById;
getElementsByClassName;
querySelectorAll;
getElementsByTagName;

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
