const comida = "Pizza"; //string

const agua = new String("Agua"); // retorna um objeto do tipo construtor string

const frase = "A melhor comida";

console.log(frase[frase.length - 1]); // para acessar o ultimo caracter

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

console.log(listaFrutas.includes(fruta)); // true -> pq tem Banada em lista (INCLUDES) ainda ->istaFrutas.includes(fruta,14)
console.log(fruta.includes(listaFrutas)); // false -> pq Só tem Banana não tem a string inteira

console.log(fruta.startsWith("Ba")); //startsWith começa com OBS: case sensitive.

console.log(listaFrutas.endsWith("ja")); //endsWith termina com 'ja'

//str.slice(start, end) corta a string de acordo com os valores se start e end
const transacao1 = "Depósito do cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisa";

console.log(transacao1.slice(-4)); // saída ->ente  OBS: Pode passar tem string ex: slice(Taxa) vai buscar apenas taxa
console.log(transacao2.slice(9, 15)); // saída -> de for
console.log(transacao3.slice(0, 7)); // saída -> Taxa de

//str.substring(start,end)
const linguagem = "JavaScript";

console.log(linguagem.substring(3, 5)); //saída -> 'aS'
console.log(linguagem.substring(0, 4)); //saída -> Java

//str.indexOf(search) e str.lastlIndexOf(search)
//indexOf -> Assim que ele achar o primeiro resultado ele retorna
//lastlIndexOf -> Retorna o ultimo resultado
const instrumento = "Guitarra";

console.log(instrumento.indexOf("r")); //saída -> 5 retorna o primeiro 'r' que ele encontrou
console.log(instrumento.lastIndexOf("r")); //saída -> 6 retorna o 'r' ultimo que encontrou
console.log(instrumento.indexOf("it")); //saída -> 2

//str.padStart(n, str)e str.padEnd(n,str)
//Aumenta o tamanho da string para o valor de 'n'
const listaPreco = ["R$ 99", "R$ 199", "R$ 12000"];

// listaPreco.forEach((preco) => {
//   console.log(preco);
// });

console.log(listaPreco[0].padStart(10, ".")); // saída -> ...R$ 99
console.log(listaPreco[2].padEnd(11, ".")); // saída -> RR$ 12000...

const frase1 = "Ta";
console.log(frase1.repeat(5)); //saída -> TaTaTaTaTa

let listaItens = "Camiseta Boné Calças Bermuda Vestido Saias";
listaItens = listaItens.replace(/[ ]+/g, ", "); //add uma virgula e um espaço entre as strings ->/[ ]+/g expressão regular
console.log(listaItens);

let preco = "1200,43";
preco = preco.replace(",", ".");
console.log(preco);

const arrayLista = listaItens.split(" "); //split já retorna uma array
console.log(arrayLista);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
console.log(htmlArray);
const novoHtml = htmlArray.join("section"); //juntando o conteúdo da tag anterior e trocando a tag div por section
console.log(novoHtml);

const frutasArray = ["Banana", "Melancia", "Abacaxi"];
console.log(frutasArray.join(", "));

//str.trim(), str.trimStart(), str.trimEnd()
const valor = "  R$ 23.00   ";
console.log(valor.trim()); // 'R$ 23.00'
console.log(valor.trimStart()); // 'R$ 23.00   '
console.log(valor.trimEnd()); // '  R$ 23.00'
