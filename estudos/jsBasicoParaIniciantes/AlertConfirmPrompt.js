/*
alert('Mensagem');
window.confirm('Deseja realmente apagar?');
window.prompt('Digite seu nome?');
*/

let num1 = prompt("Digite o 1° número: ");
let num2 = prompt("Digite o 2° número: ");

console.log(num1);
console.log(num2);

num1 = Number(num1);
num2 = Number(num2);

//const conta = num1 + num2;

alert(`Resultado: ${num1 + num2}`);
