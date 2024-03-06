// const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach((item, index, array) => {
//   // array[index] = "teste";
//   console.log(item.toUpperCase(), index, array);
// });

// console.log(carros);

// const li = document.querySelectorAll("li");

// li.forEach((i) => {
//   i.classList.add("ativa"); // add class ativa nas 'li'
// });

// //map() funciona da mesma forma que o forEach, só que retorna uma nova array com valores atualizados de acordo com o return de cada iteração
// const carros1 = ["Ford", "207", "Fusca"];
// const newCarros = carros1.map((item) => {
//   return "carro " + item;
// });

// //OBS: O map() sempre vai retonar uma array nova com valores que tinha antes modificados, tem que ter o return

// console.log(carros1);
// console.log(newCarros);

// const numeros = [2, 4, 5, 6, 78];
// const numerosX2 = numeros.map((i) => {
//   return i * 2;
// });

// console.log(numerosX2);

// //OBS: A diferença entre forEach() e map() no foreach vc interage com o array já existente no map() apartirdo array existente ele te dar um novo array.

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const tempoAulas = aulas.map((i) => {
//   return i.min;
// });

// const nomeAulas = function (aula) {
//   return aula.nome;
// };
// // ou
// const nomeAulas2 = (aula) => aula.nome;

// const arrayNomeAulas = aulas.map(nomeAulas2); // dentro no map() está chamando a função

// console.log(arrayNomeAulas);

//Reduce() outra forma de iterar
// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item) => {
//   console.log(acumulador, item);
//   return acumulador + item;
// }, 0); //--> comaça com zero, más poderia começar com qualquer outro valor e se não colocar nenhum valor ele pula a primira iteracao

// console.log(reduceAulas); //65

// const numeros = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//   if (anterior > atual) {
//     return anterior;
//   } else {
//     return atual;
//   }
// });

// console.log(maiorNumero);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const listaAulas = aulas.reduce((acumulador, aula, index) => {
  // console.log(index);
  acumulador[index] = aula.nome;
  return acumulador;
}, {}); //o acumulador começa com obj vazio {}  //Aula guarda o objeto //Index guarda o index em si

//reduceRight() começa da direita para esquerda

const frutas = ["Banana", "Pêra", "Uva"];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + " " + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + " " + fruta);

console.log(frutasRight); // Uva Pêra Banana
console.log(frutasLeft); // Banana Pêra Uva

//some() se pelo menos um return da iteração for true, ele retorna true: é como se fosse o 'OU'

const temUva = frutas.some((fruta) => {
  return fruta === "Uva";
});

console.log(temUva); //true

function maior100(numero) {
  return numero > 100;
}

const numeros = [10, 14, 43, 88, 101, 2];
const temMaior = numeros.some(maior100); //'se' chama a função maior100, tendo numero maior ele retorna true
console.log(temMaior);

//every() verifica se todas as intereções retornam true se pelo menos uma for false ele retorna false
const frutas1 = ["Banana", "Pêra", "Uva", ""];
const arrayCheia = frutas1.every((fruta) => {
  return fruta;
});
console.log(arrayCheia); //flase pq na array existe um item vazio

const num = [10, 14, 43, 33, 102, 9];
const maior3 = num.every((n) => {
  return n > 8;
});
console.log(maior3);

// find() retorna valor atual da primeira iteração q retorna um valor true
//findIndex() retorna o index deste valor na array

const frutas2 = ["Banana", "Pêra", "Uva", "Maçã"];
const buscaUva = frutas2.findIndex((fruta) => {
  return fruta === "Uva";
});
console.log(buscaUva); //2

const numero = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numero.find((n) => {
  return n > 45;
});
console.log(buscaMaior45); //88

//filter() retorna uma array com a lista de valores q durante a sua iteração retornaram um valor true
const frutas3 = ["Banana", undefined, null, "Pêra", "Uva", "Maçã", ""];

const arrayLimpar = frutas3.filter((i) => {
  return i;
});
console.log(arrayLimpar);

const maior45 = numero.filter((i) => {
  return i > 45;
});
console.log(maior45); //[88,101] --> retorna uma array

// map() pode ser muito interagirmos com uma array de objetos, onde desejamos isolar um valor único da cada objeto
const aulas1 = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];
// puxando o tempo de aula
const tempoAula = aulas1.map((i) => {
  return i.min;
});

console.log(tempoAula);

//Puxando o nome das aulas
const nomeAula = aulas1.map((i) => {
  return i.nome;
});
console.log(nomeAula);
