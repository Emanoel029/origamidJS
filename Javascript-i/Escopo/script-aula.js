function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro();
//console.log(carro);

{
  var carro = "Fusca"; // Var vaza o escopo, pode ser acessada fora das chaves, const não pode!
  const ano = 2024;
}

console.log(carro);
console.log(ano);
