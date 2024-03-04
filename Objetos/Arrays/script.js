const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
const preimeiroValor = comidas.shift();
console.log(preimeiroValor);
// Remova o último valor de comidas e coloque em uma variável
const ultimoValor = comidas.pop();
console.log(ultimoValor);
// Adicione 'Arroz' ao final da array
console.log(comidas.push("Arroz"));
// Adicione 'Peixe' e 'Batata' ao início da array
console.log(comidas.unshift("Peixe", "Batata"));
console.log(comidas);
const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());
// Inverta a ordem dos estudantes
console.log(estudantes.reverse());
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes("Joana")); //true
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes("Juliana")); // flase

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split("section").join("ul").split("div").join("li");
// html = html.split("div").join("li");
console.log(html);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carros1 = carros.slice(); //está clonando a array original e salvando em carros1
console.log(carros.pop()); // ['Ford', 'Fiat', 'VW']
console.log(carros);
console.log(carros1); //['Ford', 'Fiat', 'VW', 'Honda']
