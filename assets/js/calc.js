const painel = document.querySelector("#painel");
const numero = document.querySelectorAll(".num");
const sinais = document.querySelectorAll(".sinais");
const del = document.querySelector("#del");
const reset = document.querySelector("#reset");
const somar = document.querySelector("#igual");

const toggleThema = document.querySelector(".toggle input");


toggleThema.addEventListener('click',()=>{
const ativarToggle = document.body;
ativarToggle.classList.toggle('thema');

console.log('clicando');

});

numero.forEach((e) => {
  e.addEventListener("click", () => {
    const num = e.getAttribute("value");
    const inseriResultado = painel.innerHTML;
    painel.innerHTML = inseriResultado + num;
    console.log(e.getAttribute("value"));
  });
});

del.addEventListener("click", () => {
  const resultado = painel.innerHTML;
  painel.innerHTML = resultado.substring(0, resultado.length - 1);
});

reset.addEventListener("click", () => {
  painel.innerHTML = "";
});

somar.addEventListener("click", () => {
  const resultado = painel.innerHTML;
  if (resultado) {
    painel.innerHTML = eval(resultado);
  } else {
    painel.innerHTML = "";
  }
});
