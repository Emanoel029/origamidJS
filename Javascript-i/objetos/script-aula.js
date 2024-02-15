//Objeto serve para organizar o código em pequenas partes reutilizáveis.

var dados = {
  nome: "Emanoel",
  idade: 33,
  profissao: "Desenvolvedor",
};

console.log(dados);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  },
};

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.log(quadrado.cinco());

console.log(Math.random()); //metodo quadradinho roxo, propriedade é azul

//Para acessar propriedade de um objeto utilizando o ponto. exemplo

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84e",
  metadeHeight() {
    return this.height / 2;
  },
};

menu.backgroundColor = "#000"; // mudando o background
menu.color = "#blue"; // Adicionando uma cor dentro do objeto

var bg = menu.backgroundColor;
console.log(menu.metadeHeight());
