// Crie uma função para verificar se um valor é Truthy

function vv(dado) {
  return !!dado; ///solução do professor
}

function verifica(valor) {
  if (typeof valor === "string") {
    return true;
  } else {
    return false;
  }
}
console.log(verifica(33));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function quadrado(lado) {
  var perimetro = lado * 4;
  return perimetro;
}

console.log(quadrado(20));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `Olá me chamo ${nome} e meu sobrenome é ${sobrenome}`;
}

console.log(nomeCompleto("Emanoel", "Timbó"));

// Crie uma função que verifica se um número é par
function verifica(num) {
  if (num % 2 === 0) {
    return `O número que vc digitou é par`;
  } else {
    return `O número que vc digitou é impar`;
  }
}

console.log(verifica(33));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipo(dado) {
  return typeof dado;
}
console.log(tipo("oi"));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener("click", () => {
  console.log("Emanoel Timbó");
});

//Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));

//0206 Objetos 1
