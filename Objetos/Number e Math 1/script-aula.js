console.log(Number.isNaN(NaN)); //True
console.log(Number.isNaN(4 + 5)); // false não é NaN

console.log(Number.parseFloat("33.45")); //saída um número
console.log(Number.parseFloat("100 Reais")); //saída um número 100 OBS: n pode ter caracter na frente do num R$ 100

let valor = "R$ 100 reais";
console.log(valor.replace("R$ ", ""));

//toFixed() arredonda com base no total de casas descimais

const preco = 2.4;
console.log(preco.toFixed()); // 2.4 -> saida 2. se for 2.5 -> saida 3

const carro = 1000.453;
console.log(carro.toFixed(2)); // duas casa descimais -> 1000.45

const preco1 = 1499.49;
console.log(+preco1.toFixed() + 34); //saída 1499 como após o ponto é 4 ele arredonda para baixo

//toString -> transforma número em string
const n = 2.99;
console.log(n.toString());

//(toLocaleString)formata o número de acordo com a língua e opção passada
const preco2 = 59.49;
console.log(
  preco2.toLocaleString("en-US", { style: "currency", currency: "USD" })
);
console.log(
  preco2.toLocaleString("pr-BR", { style: "currency", currency: "BRL" })
);

//Math é um objeto nativo q possui propriedade e métodos de expressões matemáticas comuns
//PI , abs-> transforma valor negativo em positivo

console.log(Math.ceil(4.4)); // arredonda pra mais (teto)
console.log(Math.floor(4.8334)); // arredonda para menos
console.log(Math.round(4.5334)); // arredonda para menos até o primeiro depois do ponto for 4 acima disso é p mais

//max() retorna o maior número de uma lista
//min() retorna o menor número de uma lista de argumentos
console.log(Math.max(5, 3, 10, 42, 2)); // 42
console.log(Math.min(5, 3, 10, 42, 2)); // 2

//Random() número aleatório entre 0 e 1
console.log(Math.random());
console.log(Math.floor(Math.random() * 100)); //floor está arrdondando para menor
console.log(Math.round(Math.random() * 25)); //rond está arredondando para mais

//está arredondando entre 72 e 32
console.log(Math.floor(Math.random() * (72 - 32 + 1)) + 32);
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
