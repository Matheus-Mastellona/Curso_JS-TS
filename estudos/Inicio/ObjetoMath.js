let num1 = 9.54578;
let num2 = Math.floor(num1); // Aredondando para baixo
console.log(num2);

let num3 = 9.54578;
let num4 = Math.ceil(num3); // Aredondando para cima
console.log(num4);

let num5 = 9.54578;
let num6 = Math.round(num5); // Aredondando ao mais próximo
console.log(num6);

console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)); // Qual o maior número da sequência

console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)); // Qual o menor número da sequência

console.log(Math.random()); // Vai gerar um número aleatório entre 0 - 1, contudo o 1 nunca será incluido
// random
{
  const aleatorio1 = Math.random();
  console.log(aleatorio1);

  const aleatorio2 = Math.random() * (10 - 5) + 5;
  console.log(aleatorio2);

  const aleatorio3 = Math.round(Math.random() * (10 - 5) + 5);
  console.log(aleatorio3);
}

console.log(Math.PI); // valor do PI

console.log(Math.pow(2, 10)); // elevar um número ou console.log(2 ** 10);

// raiz quadrada
{
  let vari1 = 9;
  console.log(vari1 ** (1 / 2)); // raiz quadrada
  console.log(vari1 ** 0.5); // raiz quadrada
}

console.log(100 / 0);
console.log(!!(100 / 0));
