// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault(); //previne o comportamento
  //para remover os que tem aclss ativo eu faço um loop por todos eles
  links.forEach((link) => {
    link.classList.remove("ativo"); //remove a classe ativo de todos os links
  });
  event.currentTarget.classList.add("ativo"); // adciona a class ativo
}

links.forEach((link) => {
  link.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const selecao = document.querySelectorAll("body *"); // selecionando totod os elementos desde o body

//função que exibe qual elemento está sendo clicado.
function sele(i) {
  console.log(i.currentTarget);
}

//loop por todos os elementos e ao clicar no elemento, chama a função sele(i)
selecao.forEach((Element) => {
  Element.addEventListener("click", sele);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// function sele(event) {
//   event.currentTarget.remove();
// }

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

// function capitura(e) {
//   console.log(e.key);
//   if (e.key === "t") {
//     document.documentElement.classList.toggle("textamaior"); //esta add e remevendo a class texto a tag HTML
//     //documenteElement é exatamente o HTML e posso add uma class nele,
//   }
// }

// window.addEventListener("keydown", capitura); //keydown é o evento para capturar a tecla q está sendo clicada.

//0308 Traversing e Manipulação 1
