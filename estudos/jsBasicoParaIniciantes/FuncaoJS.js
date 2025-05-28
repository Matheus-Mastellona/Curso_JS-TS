function saudacao() {
  console.log("Bom dia!");
}
saudacao();

function saudacao1(nome) {
  console.log(`Bom dia ${nome}!`);
}
saudacao1("Ruya");

function saudacao2(nome) {
  return `Bom dia ${nome}!`;
}
const variavel = saudacao2("Jose");
console.log(variavel);

function soma(x, y) {
  const resultado = x + y;
  return resultado;
}
console.log(soma(1, 1));

function soma(x = 1, y = 1) {
  const resultado = x + y;
  return resultado;
}
console.log(soma());
console.log(soma(4));

const raiz = function (n) {
  return n ** 0.5;
}; // como uma variável quem recebe, preciso fechar as chaves da func

console.log(raiz(9));

const raizSemFunction = (n) => n ** 0.5;

console.log(raizSemFunction(25));
