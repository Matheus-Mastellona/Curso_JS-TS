function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector("#resultado");

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const valorInicial = Number(
      form.querySelector("#input-valor-inicial").value.replace(",", ".")
    );
    const aporteMensal = Number(
      form.querySelector("#input-aporte-mensal").value.replace(",", ".")
    );

    const anos = Number(form.querySelector("#input-anos").value);

    if (
      isNaN(valorInicial) ||
      isNaN(aporteMensal) ||
      isNaN(anos) ||
      valorInicial < 0 ||
      aporteMensal < 0 ||
      anos <= 0
    ) {
      resultado.innerHTML = `<p style="color: red;">Por favor, insira valores válidos.</p>`;
      return;
    }

    const inflacaoAnual = 0.0558;
    const selicAnual = 0.1475;
    const inflacaoMensal = Math.pow(1 + inflacaoAnual, 1 / 12) - 1;
    const selicMensal = Math.pow(1 + selicAnual, 1 / 12) - 1;
    const taxaRealMensal = (1 + selicMensal) / (1 + inflacaoMensal) - 1;

    let saldo = valorInicial;
    const meses = anos * 12;

    for (let mes = 1; mes <= meses; mes++) {
      saldo = (saldo + aporteMensal) * (1 + taxaRealMensal);
    }

    const saldoFormatado = saldo.toFixed(2).replace(".", ",");

    resultado.innerHTML = `
      <p>Após ${anos} anos, seu investimento valerá:</p>
      <p style="font-size: 24px; color: var(--primary-color);">R$ ${saldoFormatado}</p>
    `;

    form.reset();
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
