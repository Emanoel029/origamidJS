const promesa = new Promise((resolve) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: "Emanoel", idade: 33 });
    }, 1000);
  } else {
    reject(Error("Um erro ocorreu na promise"));
  }
});

promesa.then((resolucao) => {
  console.log(resolucao);
});
