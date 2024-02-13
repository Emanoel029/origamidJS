var total = 10 + 5 + 10;

var divisao = 200 / 5;

var modulo = 2334988 % 3;
console.log(modulo);

var soma = "100" + 50; //vai consatenar e sair um string 10050
var subtracao = "100" - 50; // vai sair um número 50
var multiplicacao = "100" * 2; // vai seir um número 200

var divisao = "comprei 10" / 2; //NaN (not a Number)

var numero = 80;
var unidade = "kg";
var peso = numero + unidade; //vai sair 80kg como string

// A ordem importa
var total1 = 20 + 5 * 2; //30
var total2 = (20 + 5) * 2; //50
var total3 = (20 / 2) * 5; //50
var total4 = 10 + 10 * 2 + 20 / 2; //40
console.log(total4);

var idade = +"28"; //transfoma o a string em número
var somaIdade = 5;

console.log(idade + somaIdade);
