/* let a = "A"; // B
let b = "B"; // C
let c = "C"; // A

const letras = [b, c, a];

[a, b, c] = letras; // desestruturação
console.log(a, b, c); */

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, , cinco, , sete, ...resto] = numeros; // atribuição por desestruturação
console.log(um, tres, cinco, sete);
console.log(resto);
