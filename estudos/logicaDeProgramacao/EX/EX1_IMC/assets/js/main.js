function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector("#resultado");

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const peso = Number(form.querySelector("#input-peso").value);
    const altura = Number(form.querySelector("#input-altura").value);

    if (!peso || !altura) {
      resultado.innerHTML = `<p style="color: red;">Por favor, insira valores válidos.</p>`;
      return;
    }

    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);

    resultado.innerHTML = `<p>Seu IMC é de : <strong>${imcFormatado}</strong></p>`;

    form.reset();
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
