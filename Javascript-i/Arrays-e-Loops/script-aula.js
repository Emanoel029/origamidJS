//var ultimoItem = game.pop(); //remove o item do array
// console.log(ultimoItem);
// console.log(game);

for (i = 1; i <= 10; i++) {
  console.log(i);
}

var game = ["PS4", "XBOX", "Switch", "3DS"];

for (var n = 0; n < game.length; n++) {
  //console.log(game[n]);
  if (game[n] === "Switch") {
    break;
  }
}

//forEach é uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
var frutas = ["Banana", "Pera", "Abacate", "uva"];

frutas.forEach(function (item, i) {
  console.log(item, i); //O item vira dinamicamente os valores da array
});
