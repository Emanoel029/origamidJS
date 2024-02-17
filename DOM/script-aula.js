const href = window.location.href;

console.log(href);

const titulo = document.querySelector(".title");

titulo.innerHTML = `Eu vou conseguir`; //muda o conteúdo da tag h1
console.log(titulo.innerText); //retorna o conteúdo da tag h1
console.log(titulo.id); //retorna o id da tag h1
console.log(titulo.offsetHeight); //retorna a altura do elemento h1
titulo.addEventListener("click", () => {
  console.log("clicou em", titulo.innerText); //add edento de click ao clicar no h1 dispara no console
});
