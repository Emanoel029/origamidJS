// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
//console.log(var, marca, portas);
//Pq está tentando acessar as variáveis marca e portas que são do tipo CONST e LET fora do escopo

// Como corrigir o erro abaixo? passando a variável const dois para global
const dois = 2;
function somarDois(x) {
  return x + dois;
  //const dois = 2;
}
function dividirDois(x) {
  return x + dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500? Só trocar a variável VAR por let dentro no FOR, isso pq quando é declarada com var ela sobre escreve e quando é declarada com let não vaza o escopo de dentro do for.
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
