function meuEscopo() {
  const data = new Date();
  const h1 = document.querySelector("h1");

  function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
      case 0:
        diaSemanaTexto = "Domingo";
        return diaSemanaTexto;
      case 1:
        diaSemanaTexto = "Segunda-feira";
        return diaSemanaTexto;
      case 2:
        diaSemanaTexto = "Terça-feira";
        return diaSemanaTexto;
      case 3:
        diaSemanaTexto = "Quarta-feira";
        return diaSemanaTexto;
      case 4:
        diaSemanaTexto = "Quinta-feira";
        return diaSemanaTexto;
      case 5:
        diaSemanaTexto = "Sexta-feira";
        return diaSemanaTexto;
      case 6:
        diaSemanaTexto = "Sábado";
        return diaSemanaTexto;
      default:
        diaSemanaTexto = "";
        return diaSemanaTexto;
    }
  }

  function getMesTexto(mes) {
    const meses = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];
    return meses[mes];
  }

  function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
  }

  function getDataFormatada(data) {
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const diaSemana = data.getDay();
    const hora = data.getHours();
    const min = data.getMinutes();

    const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

    return `${diaSemanaTexto}, ${dia} de ${getMesTexto(
      mes
    )} de ${ano} ${zeroEsquerda(hora)}:${zeroEsquerda(min)}`;
  }

  h1.innerHTML = `<p><strong>${getDataFormatada(data)}</strong></p>`;
}

meuEscopo();
