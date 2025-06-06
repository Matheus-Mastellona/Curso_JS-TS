// Argumentosque sustenta todosos argumentos enviados

function funcao() {
  console.log("!!!!");
}
funcao("Valor");

// Argumentosque sustenta todosos argumentos enviados
function funcao1() {
  console.log(arguments[0], arguments[1]);
}
funcao1("Valor", 1, 2, 3);

function funcao2(a, b, c) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total, a, b, c);
}

funcao2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcao3(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}

funcao3(1, 2, 3);