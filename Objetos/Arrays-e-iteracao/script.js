// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const curso = document.querySelectorAll(".curso");
const array = Array.from(curso); //transformando a NodeList em um array
//tansformando a array em objeto
const objetArray = array.map((i) => {
  const titulo = document.querySelector("h1").innerText;
  const descricao = document.querySelector("p").innerText;
  const aulas = document.querySelector(".aulas").innerText;
  const horas = document.querySelector(".horas").innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});
console.log(objetArray);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maior100 = numeros.filter((i) => {
  return i > 100;
});

console.log(maior100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const valorTotal = compras.reduce((acumlador, i) => {
  const limpaPreco = +i.preco.replace("R$", "").replace(",", ".").trim();
  return acumlador + limpaPreco;
}, 0);

console.log(valorTotal);
