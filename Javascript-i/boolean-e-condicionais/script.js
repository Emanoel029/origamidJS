// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var mIdade = 33;
var pIdade = 33;
if (mIdade > pIdade) {
  console.log("É maior");
} else if (mIdade === pIdade) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
//3 pq todos são verdadeiros  e no && ele retorna o ultima verdadeiro ou o primeiro valor falso
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; //true
var idade = 28; //true
var possuiDoutorado = false;
var empregoFuturo; //undefined / falso
var dinheiroNaConta = 0; //false
console.log(!!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil tem mais habitantes");
} else if (brasil === china) {
  console.log("Ambus tem o mesmos números de habitantes");
} else {
  console.log("China tem mais habitantes que o Brasil");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro"); //resposta falso pq no && tedo o falso ele n olha para os demais
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); //resposta Cão
} else {
  console.log("Falso");
}
