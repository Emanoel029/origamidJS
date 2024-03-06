// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const curso = document.querySelectorAll(".curso"); // tras uma NodeList
const arrayCurso = Array.from(curso); // transforma em array
// transforma a arrayCurso em objeto
const objCurso = arrayCurso.map((i) => {
  const titulo = i.querySelector("h1").innerText; //seleciona o h1 e busca o texto com innerText
  const descricao = i.querySelector("p").innerText; //seleciona o p e busca o texto com innerText
  const aulas = i.querySelector(".aulas").innerText; //seleciona a tag span e busca o conteúdo da tag com innerText
  const horas = i.querySelector(".horas").innerText; //seleciona a tag sapn e busca o conteúdo da tag com innerText
  return {
    titulo: titulo,
    descricao: descricao,
    aula: aulas,
    hora: horas,
  };
});
console.log(objCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maior100 = numeros.filter((i) => {
  return i > 100;
});
console.log(maior100); //[333, 122, 322]

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

function existe(i) {
  return i === "Baixo";
}

const exist = instrumentos.some(existe); // se tiver 'Baixo' dentro da array instrumento ele retorna TRUE
console.log(exist); // true

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
const valores = compras.map((i) => {
  const val = parseFloat(i.preco.replace("R$", "").replace(",", ".").trim());
  return val;
});

const somaTota = valores.reduce((acumulador, atual) => {
  return acumulador + atual;
});
console.log(somaTota);
