//isolando esse bloco de código dentro dessa function initAccordion()
export default function initAccordion() {
  const accondionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  const activeClass = "ativo";
  if (accondionList.length) {
    accondionList[0].classList.add(activeClass); //deichando o primeiro elemento ativo DT
    accondionList[0].nextElementSibling.classList.add(activeClass); //deixando o proximo elemento ativo depois do DT que é o DD

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
      //o this está fazendo referência ao accondionList(dt) que está senco clicado.
    }

    accondionList.forEach((i) => {
      i.addEventListener("click", activeAccordion);
    });
  }
}
