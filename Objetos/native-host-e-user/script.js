// Liste 5 objetos nativos
Object;
String;
Array;
Function;
Number;
// Liste 5 objetos do browser
Window;
History;
Document;
HTMLCollection;
NodeList;
// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox   (webkitHidden -> tem no chorm e não firefox)
if (typeof document.webkitHidden !== "undefined") {
  console.log("existe");
} else {
  console.log("Não existe");
}
