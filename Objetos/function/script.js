// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("p"); //seleção de todos os p
const arrayPag = Array.prototype.reduce.call(
  paragrafos,
  (acumulador, i) => {
    return acumulador + i.innerText.length; //innerText para pegar o texto dos 'p' length pega o total de caracteres
  },
  0
);

console.log(arrayPag);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag); // criando a tag
  classe ? elemento.classList.add(classe) : null; //Add a class que o usuário passar
  conteudo ? (elemento.innerHTML = conteudo) : null; // innerHTML para escrever o conteúdo na tag
  return elemento;
}

const novo = criarElemento("h1", "certo", "Vai da certo"); // os atributos que o suário passa
document.body.appendChild(novo); // add no body ao vivo a tag, class e conteúdo

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Titulo = criarElemento.bind(null, "h1", "titulo"); // bind() não execulta a função ele retorna a mesma com o novo contexto de this. h1Titulo é uma function

const cursosJS = h1Titulo("Curso de JavaScript");
const cursoHTML = h1Titulo("Curos de HTML");

console.log(cursosJS, cursoHTML);
