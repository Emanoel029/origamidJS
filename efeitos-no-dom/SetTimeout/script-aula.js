// const btn = document.querySelector("button");
// btn.addEventListener("click", handleClick);

// function handleClick() {
//   this.classList.add("active");
// }

// function espera(texto) {
//   console.log(texto);
// }

// setTimeout(() => {
//   console.log("testando");
// }, 1000);

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 300 * i);
// }

let i = 0;
const meuLoop = setInterval(() => {
  console.log(i++);
  if (i > 15) {
    clearInterval(meuLoop);
  }
}, 300);
