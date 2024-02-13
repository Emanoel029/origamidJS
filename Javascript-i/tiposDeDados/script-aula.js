var nome = "André";
var idade = 23;
var time;
console.log(typeof time);

var nome = "André ";

var sobrenome = "Timbó";
var nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);

var gols = 1000;
var frase = "Romário fez " + gols + " gols";
var frase2 = `Romário fez ${gols} gols`;
console.log(typeof frase); //Embora gols seja numbre quando soma com a string vira string
console.log(frase2);

var ano = "2018";

var frase1 = 'Esse é o "melhor" jogo';
console.log(frase1);
