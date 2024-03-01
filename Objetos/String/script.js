// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Taxa Cliente",
    valor: "R$ 49",
  },
];
let sumValor = 0;
let recebimento = 0;
transacoes.forEach((i) => {
  const limpString = +i.valor.replace("R$ ", ""); //O '+' na frente do 'i' é para transformar a str de num em Number
  // Pegando apenas as descrições q tem a palavra Taxa
  if (i.descricao.slice(0, 4) === "Taxa") {
    sumValor += limpString;
  } else if (i.descricao.slice(0, 4) === "Rece") {
    recebimento += limpString;
  }
});
console.log(sumValor);
console.log(recebimento);

// Retorne uma array com a lista abaixo
// const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
let transport = "Carro;Avião;Trem;Ônibus;Bicicleta";
const array = transport.split(";"); //Divide a string de acordo com o padrão passado e retorna uma array.
console.log(array);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlArry = html.split("span").join("a");
console.log(htmlArry);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase[frase.length - 1]); // ou pode ser usado ->frase.slice(-1)

// Retorne o total de taxas
const transacoes1 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

// console.log(transacoes1.length - 1);

let totalTaxas = 0;
transacoes1.forEach((i) => {
  i = i.toLocaleLowerCase(); //todos para minusculo
  i = i.trim(); //tira os espaços
  i = i.slice(0, 4); //vai do indice 0 ao 4
  if (i === "taxa")
    //se o indice igual a taxa soma
    totalTaxas++;
});
console.log(totalTaxas);
