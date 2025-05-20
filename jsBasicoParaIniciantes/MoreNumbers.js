let num1 = 1;
let num2 = 2.5;

console.log(num1 + num2);

console.log(num1.toString() + num2);

num1 = num1.toString();
console.log(typeof num1);

console.log();
console.log("Binario");
let num3 = 1000;
console.log(num3.toString(2));

console.log();
console.log("Base 16");
console.log(num3.toString(16));

console.log();
console.log("Definição de casas decimais");
let num4 = 12.345346;
console.log(num4.toFixed(2));

console.log();
console.log("Validando se é inteiro ou nao");
console.log(Number.isInteger(num1));

console.log();
console.log("NaN");
let calc = num1 * "Ola";
console.log(Number.isNaN(calc));

console.log();
console.log("Imprecisão - IEEE 754-2008");
let n1 = 0.7,
  n2 = 0.1;

n1 += n2; // 0.8
console.log(n1);
n1 += n2; // 0.9
n1 += n2; // 1.0

// n1 = n1.toFixed(2);
// console.log(n1);
// console.log(Number.isInteger(n1));

n1 = parseFloat(n1.toFixed(2));
console.log(n1);
console.log(Number.isInteger(n1));

let n3 = 0.7,
  n4 = 0.1;

n3 = (n3 * 100 + n4 * 100) / 100;
console.log(n3);
