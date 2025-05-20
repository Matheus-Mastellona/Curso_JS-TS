/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Apenas uma expressão precisa ser verdadeira para retornar true
! -> NOT -> NÃO -> Negação
*/

const expressaoAnd = true && true && true && true;
const expressaoOr = false || false || false || true;

console.log(expressaoAnd);
console.log(expressaoOr);

const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '12345';
console.log(vaiLogar);

console.log(!true); // false
console.log(!false); // true

/*
 
if (!vaiLogar) {
  console.log('Não vai logar');
}

*/