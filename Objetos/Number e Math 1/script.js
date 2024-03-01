// Retorne um número aleatório
// entre 1050 e 2000

const numAle = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050; // (max - min + 1) + min
console.log(numAle);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const ArrayNum = numeros.split(",").map(Number); //map transforma a str em Número

const maior = Math.max(...ArrayNum); //os três pontos podem ser usados para expandir elementos
console.log(maior);
// console.log(Math.max(numeros));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((i) => {
  soma += limparPreco(i);
});

console.log(
  soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);

// limparPreco(listaPrecos[1]);
