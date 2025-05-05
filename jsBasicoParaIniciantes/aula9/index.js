var variavel = "Luiz";
var variavel = "Otávio";

// var permite a criação do mesmo nome de variável

console.log(variavel);

variavel = "Luiz"; // Por default a variável vem como var

const nome = "Luiz"; // string
const nome1 = "Jaco"; // string
const nome2 = "Jose"; // string

const num1 = 10; // number
const num2 = 10.53; // number

let nomeAluno; // undefined = não é apontado para nenhum local na memória
const sobreNomeAluno = null; // Nulo -> não aponta para nenhum local na memória
const aprovado = true; // Valor booelano explicito --- true, false (lógico)

console.log(typeof aprovado, aprovado);

let a = 2;
const b = a;
console.log(a, b);

a = 3;
console.log(a, b);

/*

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a,b);

*/
