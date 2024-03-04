// const instrumentos = ["Guitarra", "Baixo", "Violão"];
// const precos = [49, 99, 69, 89];

// const dados = [
//   new String("Tipo 1"),
//   ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
//   function andar(nome) {
//     console.log(nome);
//   },
// ];

// console.log(dados[1][2].preco); //para acessar uma array'[]', para acessar um objeto '.' um função '()'
// console.log(dados[2]("Emanoel"));

// //criando uma array
// const carros = new Array("Corolla", "Uno", "Honda");

// carros[2] = "SW4"; // mudando o valor da array
// console.log(carros);

// //transforma uma NodeList em uma array
// const li = document.querySelectorAll("li");
// console.log(li);

// const arrayLi = Array.from(li);
// console.log(arrayLi);

// //transformando um objeto em uma array
// const obj = {
//   0: "André",
//   1: "Emanoel",
//   2: "Timbó",
//   length: 3, // a propriedade Length é obrigatária para transformar o obj em array
// };
// const objArray = Array.from(obj);
// console.log(objArray);

// //verifica se é uma array 'isArray()'
// console.log(Array.isArray(arrayLi)); //true

// //criando Array
// Array.of(10); //cira uma array com uma posição
// console.log(Array.of("Teste", "teste2"));
// Array.of(1, 20, 29, 31, 33); //cria um array com os indice
// new Array(5); //cria uma array vazia com 5 posiçõe
// console.log(Array(20)); // cria um array com 20 posiçõess

// //Metodos modificadores de array .sort()

// const instrumentos = ["Guitarra", "Baixo", "Violão"];
// console.log(instrumentos.sort()); //organiza a array por ordem alfabética

// const idades = [32, 21, 33, 43, 1, 12, 8];
// console.log(idades.sort()); // para números n serve pq ele pega caracter por caracter [1, 12, 21, 32, 33, 43, 8]

//.unshift() adiciona elementos ao início da array e retorna o length da mesma.
//.push() adiciona elementos ao final da array e retorna o length da mesma.

const carros = ["ford", "kia", "fiat"];

console.log(carros.unshift("gol", "hb20")); // add no início da array

console.log(carros);

carros.push("uno"); // add no final da array
console.log(carros);

//.shif() remove o primeiro item da array e assim a array fica modificada
//pop() remove o ultimo elemento da array e assim a array fica modificada
const carros2 = ["Polo", "Chevete", "Saveiro", "D20"];
// console.log(carros2.shift());
// console.log(carros2.pop());
// console.log(carros2);

//reverse() inverte os itens da array e retorna a nova array.

console.log(carros2.reverse());

//Array 2

//splice() adiciona valores na array apartir do index. Remove a quantidade de itens que for passada no segundo parâmetro

const carros1 = ["Ford", "Fiat", "Vw", "Honda"];
carros1.splice(1, 0, "kia", "Mustang"); // apartir do index 1 ele vai add 'kia, Mstang' e o segundo valor é quantos vc vai remover
console.log(carros1); //saída-> ['Ford', 'kia', 'Mustang', 'Fiat', 'Vw', 'Honda']

console.log(carros1.splice(3, 2, "Ferrari")); //['Fiat', 'Vw']
carros1; //['Ford', 'kia', 'Mustang', 'Ferrari', 'Honda']

console.log(
  ["item0", "item1", "item2", "item3", "item4", "item5"].copyWithin(2, 0, 3)
); // vai fazer uma cópia da array apartir do item 2, -> saída ['item0', 'item1', 'item0', 'item1', 'item2', 'item5']

//.fill() preenche a array com o valor, do início até o fim
console.log(["item0", "item1", "item2", "item3"].fill("Aveia", 0, 2));
//.fill() o 2 começa dele até o fim ou pode ser ("avaia", 0, 2) começa do zero e vai até o 2

//.concat() n modifica a array o riginal, retorna uma array modificada, irá concatenar a array com o valor passado
const transport1 = ["Barco", "Aviao"];
const transport2 = ["Carro", "Moto"];
const transportes = transport1.concat(transport2);
console.log(transportes);
const mais = [].concat(transport1, transport2, "Bonde");
console.log(mais);

//inclides() true/false  indexOf()
const linguagens = ["html", "css", "js", "php", "python", "js"];
console.log(linguagens.includes("js")); // true
console.log(linguagens.indexOf("js")); // saida 2 más tem js na ultima posição tbm ele ignora
console.log(linguagens.lastIndexOf("js")); //saída 5 pq o js é repetido ele traz o ultimo

//join() junta a array em uma str única
console.log(linguagens.join(" ")); //html css js php python js

let htmlString = "<h2>Título Principal</h2>";
htmlString = htmlString.split("h2");
console.log((htmlString = htmlString.join("h1")));

console.log(linguagens.slice(3)); //['php', 'python', 'js'] traz os itens apartir do 4
console.log(linguagens.slice(1, 4)); //['css', 'js', 'php'] traz os itens entre 1 e 4
console.log(linguagens.slice()); // cone da array
