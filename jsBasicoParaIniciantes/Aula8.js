const nome = "Luiz";
const sobreNome = "Otávio";
const nomeFinal = "Miranda";
const idade = 30;
const peso = 84;
const alturaEmM = 1.8; // <-- NESTE LOCAL
let imc, anoNascimento;

imc = peso / Math.pow(alturaEmM, 2);
anoNascimento = 2010 - idade;

console.log(
  nome,
  sobreNome,
  nomeFinal,
  "tem " + idade + " anos, nasceu em: " + anoNascimento + "."
);

// template strings

console.log(
  `Pesa: ${peso}kg, tem ${alturaEmM} de altura e seu IMC é de: ${imc}.`
);
