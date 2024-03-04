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
const aulas = [10, 25, 30];

const reduceAulas = aulas.reduce((acumulador, item) => {
  console.log(acumulador, item);
  return acumulador + item;
}, 0); //--> comaça com zero, más poderia começar com qualquer outro valor e se não colocar nenhum valor ele pula a primira iteracao

console.log(reduceAulas); //65

const numeros = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros.reduce((anterior, atual) => {
  if (anterior > atual) {
    return anterior;
  } else {
    return atual;
  }
});

console.log(maiorNumero);