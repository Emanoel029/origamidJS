const imagem = fetch("https://viacep.com.br/ws/01001000/json/");

imagem
  .then((r) => {
    r.text();
    console.log(r);
  })
  .then((body) => {
    console.log(body);
  });
