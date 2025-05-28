// https:developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

let data = new Date(0);
console.log(data.toString());

const tresHoras = 60 * 60 * 3 * 1000;
data = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix ou época unix
console.log(data.toString());

const umDia = 60 * 60 * 24 * 1000;
data = new Date(0 + tresHoras + umDia);
console.log(data.toString());

data = new Date(2019, 3, 20, 15, 14, 27, 500);
console.log(data.toString());

data = new Date("2019-04-20 20:20:59");
console.log(data.toString());

data = new Date();

console.log(
  `\nDia: ${data.getDate()}, Mês: ${
    data.getMonth() + 1
  }, Ano: ${data.getFullYear()}, Hora: ${data.getHours()}, Minutos: ${data.getMinutes()}, Segundos: ${data.getSeconds()}, Mili Segundos: ${data.getMilliseconds()}, Dia semana: ${data.getDay()}, Timestamp: ${Date.now()}`
);

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());
  return `\n${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
