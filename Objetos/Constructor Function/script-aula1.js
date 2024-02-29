//função construtora Carro(parâmetro, parâmetro)

function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
  this.km = " 200 km rodados";
}

const honda = new Carro("Honda", 2000); //honda é um objeto passando as propiedades do objeto dentro da função Carro()
const ferrari = new Carro("Ferrari", 4000); // ferrari é um novo objeto com as mesmas propriedade de honda porém independentes
// ferrari.marca = "ferrari";
// ferrari.preco = 3000;
// honda.preco = 1000;
// honda.km = 100;

function Carro1(marca, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const fiat = new Carro1("Fiat", 5000);

//exemplo da aula

function Dom(selector) {
  this.element = function () {
    return document.querySelector(selector);
  };
  this.ativar = function () {
    this.element().classList.add("ativar");
  };
}

const li = new Dom("li");
const ul = new Dom("ul");
console.log(li.ativar());
console.log(ul.ativar());
