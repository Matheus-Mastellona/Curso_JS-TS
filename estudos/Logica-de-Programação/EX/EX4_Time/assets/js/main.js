// Declaração das variáveis de controle do tempo
let segundos = 0;
let minutos = 0;
let horas = 0;
let timer; // Variável para armazenar o ID do setInterval

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

function atualizarDisplay() {
  relogio.innerHTML = `${String(horas).padStart(2,"0")}:${String(minutos).padStart(2,"0")}:${String(segundos).padStart(2,"0")}`;
}

iniciar.addEventListener("click", function (event) {
  clearInterval(timer); // Limpa timer anterior se existir
  relogio.classList.remove("pausado");
  timer = setInterval(() => {
    segundos++;
    if (segundos === 60) {
      segundos = 0;
      minutos++;
      if (minutos === 60) {
        minutos = 0;
        horas++;
      }
    }
    atualizarDisplay();
  }, 1000);
});

pausar.addEventListener("click", function (event) {
  clearInterval(timer); // Para o cronômetro
  relogio.classList.add("pausado");
});

zerar.addEventListener("click", function (event) {
  clearInterval(timer);
  relogio.classList.remove("pausado");
  segundos = 0;
  minutos = 0; 
  horas = 0;
  atualizarDisplay();
});
