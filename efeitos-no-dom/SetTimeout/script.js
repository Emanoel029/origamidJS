// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// function mudarClass() {
//   document.body.classList.toggle("active");
// }

// setInterval(mudarClass, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const btnIniciar = document.querySelector(".iniciar");
const btnPausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");

btnIniciar.addEventListener("click", iniciarTempo);
btnPausar.addEventListener("click", pausarTempo);
btnPausar.addEventListener("dblclick", resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100);
  btnIniciar.setAttribute("disabled", ""); //dezabilita o button
}

function pausarTempo() {
  clearInterval(timer);
  btnIniciar.removeAttribute("disabled"); //habilita o botão novamente
}

function resetarTempo() {
  tempo.innerText = 0;
  i = 0;
}
