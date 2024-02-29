// Quando mudamos a propriedade seletor, o objeto Dom irá
//passar a selecionar o novo seletor em seus métodos.

// const Dom = {
//   seletor: "li",
//   //o element é uma função é a mesma coisa que isso -> function element()
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add("ativar");
//   },
// };

// Dom.seletor = "ul"; //muda a class ativar para o ul

//função construtora
function Dom(s) {
  (this.element = function () {
    return document.querySelector(s);
  }),
    //o this faz referencia ao objeto Dom
    (this.ativar = function (classe) {
      this.element().classList.add(classe); //add a classe ativar
    });
}

const li = new Dom("li"); // esse li vai ser selecionado no Dom'(s)'
// const ul = new Dom("ul");

const lastLi = new Dom("li:last-child"); //add a class ativar na ultima 'LI'
lastLi.ativar("ativar");
