// Transforme o objeto(pessoa) abaixo em uma Constructor Function
// (Eu)Obj pessoa que recebe nome, idade e um método ANDAR -> se é metodo é uma function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};
//Função controtora
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor); //selecionando os 'li' que é passado como parâmetro
  this.element = elementList; //forma uma NodList (pega todos os li estaticos)
  this.addClass = function (classe) {
    elementList.forEach((i) => {
      i.classList.add(classe); //
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach((i) => {
      i.classList.remove(classe);
    });
  };
}
const listaItens = new Dom("li");
console.log(listaItens.removeClass("ativo")); //ativando o metodo removeClass() e remove a class ativo na 'li'
// console.log(listaItens.addClass("ativo")); //Ativando a o metodo addClass() e adiciona a class ativo na 'li'

//Constructor Function 2   ---> rever essa aula
