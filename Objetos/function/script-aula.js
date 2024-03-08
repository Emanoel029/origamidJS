// const perimetro = new Function("lado", "return lado * 4");

// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar.length);

// //Call() executa função

// const carro = {
//   marca: "Ford",
//   ano: 2020,
// };

// function descricaoCarro() {
//   console.log(this.marca + " " + this.ano);
// }

// descricaoCarro.call(carro);

// const carros = ["Ford", "Fiat", "VW"];
// const frutas = ["Banana", "Abacate", "Goiaba"];

// //o call é como se tivasse usando o this para a constante carros! Embora esteja fazendo o forEach em frutas ele tá iterando no array carros
// frutas.forEach.call(carros, (i) => {
//   console.log(i); //Ford , Fiat, VW
// });

// // outro exemplo

function Dom(selector) {
  this.element = document.querySelector(selector);
}

Dom.prototype.ativo = function (classe) {
  console.log(this);
  this.element.classList.add(classe);
};

const ulDiferente = new Dom("ul"); // passa o seletor

const liDiferente = {
  element: document.querySelector("li"),
};

ulDiferente.ativo.call(liDiferente, "VDC"); //criando a class VDC no li. O call() aponta para o objeto liDiferente. Novo obj
ulDiferente.ativo("ativo"); //passa a class (Objeto anterior)

const frutas = ["Uva", "Maçã", "banana"];
Array.prototype.pop.call(frutas); // isso é a mesma coisa q frutas.pop()
frutas.pop();

///apply() funciona como o call() a diferença é que os argumentos da função são passados através de uma array.

const numeros = [33, 21, 345, 985, 21, 55, 60];
console.log(Math.max.apply(null, numeros));

// bind() não execulta a função ele retorna a mesma com o novo contexto de this

const li = document.querySelectorAll("li");
const arrayLi = Array.from(li);

const filtro = Array.prototype.filter.bind(li, (i) => {
  return i.classList.contains("ativo");
});

console.log(filtro());

const carro = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

console.log(carro.acelerar(100, 20));

//criou um obj honda para mudar a marca do obj carro usando a mesma função acelerar q está dentro do obj carro usando o metodo blind(honda)
const honda = {
  marca: "Honda",
};

const acelerarHonda = carro.acelerar.bind(honda);
console.log(acelerarHonda(200, 20));

//Argumentos em comuns ex: se vc tiver uma funcao que toda vez vc está utilizando ela e geralmente vc usa um argumento em comum vc pode fazer um bind nesse arguento em comun e criar uma nova função

//Ex: Um médico que tem que calcular um imc dos passientes, porém ele só recebe quem tem 1.80 de altura ele não precisa repetir esse argumento direto.

function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.8);

console.log(imc(1.8, 70)); // usando a altura
console.log(imc180(70)); // usando com a altura já definida de 1.80
