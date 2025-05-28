let data = new Date("1987-04-21 00:00:00");
let dia = data.getDay();

// if - else ao inves de Switch Case
/* 
if (dia == 0) {
    dia = "Domingo";
} else if (dia == 1) {
    dia = "Segunda";
} else if (dia == 2) {
  dia = "Terça";
} else if (dia == 3) {
  dia = "Quarta";
} else if (dia == 4) {
    dia = "Quinta";
} else if (dia == 5) {
    dia = "Sexta";
} else if (dia == 6) {
    dia = "Sábado";
}
console.log(dia); 
*/

// Switch Case
/*
 switch (dia) {
  case 0:
    dia = "Domingo";
    break;
  case 1:
    dia = "Segunda";
    break;
  case 2:
    dia = "Terça";
    break;
  case 3:
    dia = "Quarta";
    break;
  case 4:
    dia = "Quinta";
    break;
  case 5:
    dia = "Sexta";
    break;
  case 6:
    dia = "Sábado";
    break;
  default:
    dia = "Dia inválido";
    break;
} 
*/

// Função de Switch Case
function getDiaSemanaTexto(dia) {
  let diaSemanaTexto;

  switch (dia) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "Segunda";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "Terça";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "Quarta";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "Quinta";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "Sexta";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "Sábado";
      return diaSemanaTexto;
    default:
      diaSemanaTexto = "Dia inválido";
      return diaSemanaTexto;
  }
}

console.log(getDiaSemanaTexto(dia));