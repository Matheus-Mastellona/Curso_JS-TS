const pessoa = {
  nome: "Jose",
  sobrenome: "Mael",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};

/* 
let nome = pessoa.nome;
console.log(nome); 
*/

// Atribuição via desestruturação
function get1() {
  const { nome, sobrenome, idade } = pessoa;
  console.log(nome, sobrenome, idade);
}

function get2() {
  const {
    endereco: { rua, numero },
  } = pessoa;
  console.log(rua, numero);
}

function get3() {
  const { endereco } = pessoa;
  console.log(endereco);
}

function get4() {
  const { nome, ...resto } = pessoa;
  console.log(resto);
}

get1();
get2();
get3();
get4();
