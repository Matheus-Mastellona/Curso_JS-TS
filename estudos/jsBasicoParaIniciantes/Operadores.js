const num1 = 2;
const num2 = 10;

console.log("Operador Aritméticos");

console.log();
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2); // potências
console.log(2 ** 0);
console.log();

console.log("Incremento");

console.log();
let contador = 0;
contador++;
++contador;
console.log(contador++);
console.log(contador);
console.log();

console.log("Decremento");

console.log();
contador--;
console.log(contador--);
console.log(contador);
console.log(--contador);
console.log();

console.log("Operador de atribuição");
console.log();

let cont = 2;
cont += 2;
console.log(cont);

let cont1 = 2;
cont1 -= 2;
console.log(cont1);

let cont2 = 2;
cont2 *= 2;
console.log(cont2);

let cont3 = 2;
cont3 /= 2;
console.log(cont3);

let cont4 = 2;
cont4 **= 2;
console.log(cont4);

let cont5 = 2;
cont5 %= 2;
console.log(cont5);

console.log("-----------\n");

const number1 = 10;
const number2 = parseFloat("5.5");
const number3 = parseInt("5");
const number4 = Number("5");
console.log(number1 + number2);
console.log(number1 + number3);
console.log(number1 + number4);
