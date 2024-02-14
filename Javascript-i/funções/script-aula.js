function area(lado) {
  return lado * lado;
}

console.log(area(4));

function pi() {
  return 3.14;
}

var total = 5 * pi();

console.log(total);

//Parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}
//argumentos
console.log(imc(80, 1.8));
console.log(imc(60, 1.7));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Vc gosta do céu";
  } else if (cor === "amarelo") {
    return "Vc gosta do sol";
  } else if (cor === "verde") {
    return "Vc gosta da floresta";
  } else {
    return "Vc não gosta de nada";
  }
}

console.log(corFavorita("azul"));

//A função addeventListener é nativa no browser e dentro dela é p ser passada o evento e pode ser passada uma função
addEventListener("click", () => {
  console.log("oi");
});

/// Essa função é a mesma da decima, porém com estrutura diferente
function mostra() {
  console.log("Brasil");
}

addEventListener("click", mostra);

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informa sua idade";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(30));

var totalPaises = 193;
function falta(visitados) {
  return `Faltam visitar ${totalPaises - visitados} países`;
}
console.log(falta(2));

var profissão = "Desenvolvedor fornt-end";

function dados() {
  var nome = "Emaneol";
  var idade = 33;
  function outrosDados() {
    var cidade = "Fortaleza";
    var idade = 33;
    return `${nome}, ${idade}, ${cidade}, ${profissão}`;
  }
  return outrosDados();
}

console.log(dados());
