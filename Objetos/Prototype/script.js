// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const nomePessoa = new Pessoa("Emanoel", "Timbó", 33);

console.log(nomePessoa.nomeCompleto());

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; //HTMLLIElement     -->li.constructor.name
li.click; //function    -->li.click.constructor.name
li.innerText; //string  -->li.innerText.constructor.name
li.value; //Numbar      -->li.value.constructor.name
li.hidden; //Boolean    -->li.hidden.constructor.name
li.offsetLeft; // Number -->li.offsetLeft.name
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
//string
