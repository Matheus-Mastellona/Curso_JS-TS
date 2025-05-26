// For in -> lê os índices ou chaves do objeto

/* const frutas = ["Pera", "Maça", "Uva"]; */

/* for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
} */

/* for (const index in frutas) {
   console.log(frutas[index]);
}*/

const pessoa = {
  nome: "Matheus",
  sobrenome: "Noronha",
  idade: 22,
};

/* console.log(pessoa.nome);
console.log(pessoa["nome"]); */

for (const key in pessoa) {
  console.log(key, pessoa[key]);
}
