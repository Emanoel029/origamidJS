var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else if (possuiDoutorado) {
  console.log("Possui doutorado");
} else {
  console.log("Não possui nada!");
}

// possibilidades de ser flaso

// if(false)
// if(0) // ou -0
// if(NaN)
// if(null)
// if(undefined)
// if('') // ou "" ou ``

var nome = "10kg" / 10;

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

//Operadores Lógicos &&  -> Retorna o ultimo verdadeiro
if (5 - 10 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var corFavorita = "Vermelho";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu");
    break;
  case "Amarelo":
    console.log("Olhe para o sol");
    break;
  case "Vermelho":
    console.log("Olhe para as flores");
    break;
  default:
    console.log("Feche os olhos");
}
