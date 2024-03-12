// //Obect: Todo objeto é criado com um construtor object e por isso herda as propriedades e métodos do seu prototype

// const pessoa = new Object({
//   nome: "Emanoel",
//   idade: 33,
// });

// console.log(pessoa);

// //objct.create(abj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento

// // é o protótipo carro
// const carro = {
//   rodas: 4,
//   init(marca) {
//     this.marca = marca;
//     return this;
//   },
//   acelarar() {
//     return this.marca + " acelerou";
//   },
//   buzinar() {
//     return this.marca + " buzinou";
//   },
// };

// //criando objetos apartir de um protótipo
// const honda = Object.create(carro);
// honda.init("Honda");
// console.log(honda.acelarar());

// const ferrari = Object.create(carro).init("Ferrari");
// console.log(ferrari.buzinar());

// //Object.assign(alvo, obj1, obj2) add ao alvo as propriedades e métodos enumeráveis dos demais obj. O assign irá modificar o objeto alvo

// const automovel = {
//   acelerar() {
//     return " Acelerou";
//   },
//   buzinar() {
//     return " Buzinou";
//   },
// };

// const moto = {
//   rodas: 2,
//   capacete: true,
// };

// console.log(Object.assign(moto, automovel));

const moto = {};
const carro3 = {
  portas: true,
};

//configurable: false -> por padrão vem false (Não vai deixar ele deletar o obj se torna imutável)
//writable: true -> por padrão vem flase não deixa (Quando falso ele n deixa ele escrever um novo valor nele )

Object.defineProperties(moto, {
  rodas: {
    value: 2,
    // configurable: false,
    // writable: false
  },
});

Object.defineProperties(carro3, {
  portas: {
    get() {
      return this._portas;
    },
    set(valor) {
      this._portas = valor * 2 + " Total portas";
    },
  },
});

console.log(carro3.portas);

//getOwnPropertyDescriptors(obj) lista todos os metodos e propriedadee de um objeto com as configurações
