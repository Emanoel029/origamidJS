//A function 'construtora Pessoa()' tem acesso aos prototypes que foram criados fora dela temos o ex:
// console.log(emanoel.nadar()) -> nadar é um prototype e está fora da construtora

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return `Abraçou`;
  };

  this.andar = function () {
    return "Andou pelo OBJ";
  };
  //OBS:O método andar está dentro da function contrutora Pessoa, se n tivesse esse método ele iria procurar no prototype
}

//A propriedade 'protopype' está add o método 'nadar' na 'função construtora Pessoa'
Pessoa.prototype.nadar = function () {
  return `O ${this.nome} nadou para frente `;
};

const emanoel = new Pessoa("Emanoel", 33);

// console.log(emanoel);

const pais = "Brasil";
const cidade = new String("Rio");

const listAnimai = ["cachorro", "gato", "papagio"];

const lista = document.querySelectorAll("li");
const listaArray = Array.prototype.slice.call(lista);

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return 2;
  },
};
