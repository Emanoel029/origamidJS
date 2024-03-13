import scroollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import * as teste from "./modules/teste.js"; // está importando toda  a função, mas você pode chamar apenas os métodos que você precisa.

teste.teste1(); //Ativando a função
teste.teste2();

console.log(teste.senha);

console.log(teste.esseNome);

scroollSuave(); // animação do scroll
initAnimacaoScroll(); // animação de quando vai dando o scroll vai aparecendo
initAccordion(); // animação das FAQ
initTabNav(); //animaçõa da descrição das fotos

// arquivo configuracao.js
// export function scrollSuave() {};
// export const ano = 2000;
// export const obj = {nome: 'Ford'};
// export const str = 'Frase';
// export class Carro {};
